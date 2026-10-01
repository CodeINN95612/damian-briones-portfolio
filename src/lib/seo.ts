import { getAbsoluteLocaleUrl } from "astro:i18n";
import { profile, skills } from "../data/profile";
import { ui } from "../i18n/ui";
import type { ValidLanguage } from "../i18n/lang";

/** Absolute URL of a page in one language. `path` has no locale prefix. Always
    ends in a slash, to match the sitemap and the canonical links. */
export function pageUrl(lang: ValidLanguage, path = "") {
  const url = getAbsoluteLocaleUrl(lang, path);
  return url.endsWith("/") ? url : `${url}/`;
}

/** The social preview image: a static 1200x630 PNG per language in /public. */
export function ogImage(lang: ValidLanguage, site: URL) {
  return new URL(`/og-${lang}.png`, site).href;
}

const personId = (site: URL) => `${site.origin}/#person`;

/** schema.org Person. Names, role and description come from ui.ts so they match
    the visible page; the rest from profile.ts. */
export function personSchema(lang: ValidLanguage, site: URL) {
  const { hero } = ui[lang];
  return {
    "@type": "Person",
    "@id": personId(site),
    name: hero.name,
    // Both spellings, with and without the accent.
    alternateName: [...new Set(Object.values(ui).map((s) => s.hero.name))],
    url: pageUrl(lang),
    image: new URL(profile.image.src, site).href,
    jobTitle: hero.role,
    description: hero.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.city,
      addressCountry: profile.countryCode,
    },
    sameAs: [profile.linkedin, profile.github],
    knowsAbout: skills.map(({ name }) => name),
    knowsLanguage: Object.keys(ui),
  };
}

export function websiteSchema(lang: ValidLanguage, site: URL) {
  return {
    "@type": "WebSite",
    "@id": `${site.origin}/#website`,
    url: pageUrl(lang),
    name: ui[lang].meta.title,
    inLanguage: lang,
    publisher: { "@id": personId(site) },
  };
}

export function blogPostingSchema(
  lang: ValidLanguage,
  site: URL,
  post: { title: string; description: string; pubDate: Date; url: string },
) {
  return {
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.pubDate.toISOString(),
    inLanguage: lang,
    url: post.url,
    mainEntityOfPage: post.url,
    image: ogImage(lang, site),
    author: { "@id": personId(site), "@type": "Person", name: ui[lang].hero.name },
    publisher: { "@id": personId(site) },
  };
}

/** The trail shown under the result title in search. Home first, then the
    page's ancestors, ending with the page itself. */
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map(({ name, url }, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: url,
    })),
  };
}
