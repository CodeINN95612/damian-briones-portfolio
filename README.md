# Portfolio

> I help teams modernize and move enterprise systems to the cloud.

A place to show how I think as an engineer, through case studies and writing
drawn from real enterprise experience, as I move toward freelance work in
software architecture, design and cloud.

The site is meant to be clear and understated, with a distinctive identity, so
a potential client can quickly see what I do and then find depth in how I
approach problems.

> **Status:** work in progress. The contact details, portrait and CV are real,
> carried over from the old React portfolio on the `main` branch, and so are the
> three jobs (MikMak, Logiztik, CloudStudio). The blog posts are sample text.

## How it's organised

| Page          | What it's for                                                                 |
| :------------ | :---------------------------------------------------------------------------- |
| `/`           | Who I am, how I can help, skills, a short experience summary, the latest posts and a contact call to action. |
| `/experience` | The longer story: one card per job, with results, stack and related posts.    |
| `/blog`       | Case studies and writing, filterable by category.                             |

Also generated: `/sitemap.xml`, `/robots.txt` and a `404` page (set to `noindex`).

Case studies and jobs link to each other. A post names its job in the
`experience` frontmatter field; leave it out for an anonymous case study.

## Stack

- [Astro](https://astro.build) with the `ClientRouter` for page transitions
- [Tailwind CSS v4](https://tailwindcss.com), with the colour tokens in
  `src/styles/global.css`
- Outfit and JetBrains Mono through Astro's font API
- Content collections for the blog and the experience entries
- No UI framework: icons are inline SVGs in `src/components/Icon.astro`

## Project structure

```text
/
├── public/                  Logo, background, CV, favicons and og-{es,en}.png (files that need a fixed URL)
├── src/
│   ├── components/          Hero, Services, Skills, Experience, BlogTeaser, Cta, Nav, Footer…
│   ├── content/
│   │   ├── blog/{es,en}/    One markdown file per post and language
│   │   └── experience/{es,en}/  One markdown file per job and language
│   ├── data/profile.ts      Contact details, asset paths and the skills list
│   ├── i18n/                UI strings (ui.ts) and language helpers
│   ├── layouts/Layout.astro
│   ├── lib/                 Helpers: experience.ts, seo.ts (URLs and schema.org data)
│   ├── pages/               index, experience, blog, 404, sitemap.xml, robots.txt
│   │                        (English is generated under /en/)
│   └── styles/global.css
└── astro.config.mjs
```

## Content

**Languages.** Spanish is the default and has no URL prefix; English lives under
`/en/`. Both languages of a post or job share a slug, and the entry id is
`${lang}/${slug}`. UI text lives in `src/i18n/ui.ts`, so every new string needs
both languages.

**Blog post.** Add `src/content/blog/{es,en}/<slug>.md`:

```md
---
title: ...
description: ...
pubDate: 2026-01-15
category: case-study # case-study | project | research | personal
experience: mikmak # optional: slug of a job
---
```

**Job.** Add `src/content/experience/{es,en}/<slug>.md`. Keep only the latest
position, give one to three `highlights` (a short figure and what it means),
and leave `end` out for the current job. The schemas are in
`src/content.config.ts`.

**Profile.** Contact details (email, phone, LinkedIn, GitHub), the portrait
(`src/assets/personal.jpg`, resized by Astro) and the CV (`public/cv.pdf`) are set in
`src/data/profile.ts`.

## SEO

`src/components/Seo.astro`, rendered by `Layout.astro`, writes the head tags for
every page: description, canonical URL, `hreflang` links to the other language,
Open Graph and Twitter cards, and JSON-LD from `src/lib/seo.ts` (a `Person` and
`WebSite` on the home page, `BlogPosting` on posts, breadcrumbs on the rest).

- Each page passes `title` and `description` to `<Layout>`. The home page
  leaves `title` out and gets "name · role". Posts use their frontmatter
  `title` and `description`, so write both for search results: a title under
  about 60 characters and a description of 120 to 160.
- `public/og-es.png` and `og-en.png` are the 1200×630 social preview images.
  They are static, so redo them if the name, role or tagline changes.
- Canonical URLs end in a slash, to match the sitemap. The host should redirect
  the version without one.
- `sitemap.xml` is written by hand (`src/pages/sitemap.xml.ts`) because
  `@astrojs/sitemap` leaves out the English copies of the blog posts.

## Accessibility

Keyboard use has to be as clear as mouse use. The rules, such as mirroring every
hover cue on focus and the minimum text contrast, are in
[`.claude/rules/accessibility.md`](.claude/rules/accessibility.md). Follow them
when adding components.

## Commands

Run everything from the project root. Node 22.12 or newer is required.

| Command          | Action                                      |
| :--------------- | :------------------------------------------ |
| `pnpm install`   | Install dependencies                        |
| `pnpm dev`       | Start the dev server at `localhost:4321`    |
| `pnpm build`     | Build the production site to `./dist/`      |
| `pnpm preview`   | Preview the build locally before deploying  |
