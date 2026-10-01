import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { defaultLanguage, languages, type ValidLanguage } from "../i18n/lang";
import { pageUrl } from "../lib/seo";

// Written by hand because @astrojs/sitemap skips the /en/ copies of the blog
// posts: those only exist through the i18n fallback.
export const GET: APIRoute = async () => {
  const posts = await getCollection("blog", ({ id }) =>
    id.startsWith(`${defaultLanguage}/`),
  );

  // Paths have no locale prefix; every page exists in both languages.
  const pages = [
    { path: "" },
    { path: "experience" },
    { path: "blog" },
    ...posts.map((post) => ({
      path: `blog/${post.id.slice(defaultLanguage.length + 1)}`,
      lastmod: post.data.pubDate,
    })),
  ];

  const codes = Object.keys(languages) as ValidLanguage[];
  const urls = pages.flatMap(({ path, lastmod }) =>
    codes.map((lang) => {
      const alternates = [
        ...codes.map((code) => ({ hreflang: code, code })),
        { hreflang: "x-default", code: defaultLanguage },
      ]
        .map(
          ({ hreflang, code }) =>
            `<xhtml:link rel="alternate" hreflang="${hreflang}" href="${pageUrl(code, path)}"/>`,
        )
        .join("");
      const date = lastmod
        ? `<lastmod>${lastmod.toISOString().slice(0, 10)}</lastmod>`
        : "";
      return `<url><loc>${pageUrl(lang, path)}</loc>${date}${alternates}</url>`;
    }),
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls.join("")}</urlset>\n`;
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
