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
| `/`           | Who I am, what I do, skills, a short experience summary and the latest posts. |
| `/experience` | The longer story: one card per job, with results, stack and related posts.    |
| `/blog`       | Case studies and writing, filterable by category.                             |

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
├── public/                  Logo, background, portrait and CV
├── src/
│   ├── components/          Hero, Skills, Experience, BlogTeaser, Nav, Footer…
│   ├── content/
│   │   ├── blog/{es,en}/    One markdown file per post and language
│   │   └── experience/{es,en}/  One markdown file per job and language
│   ├── data/profile.ts      Contact details, asset paths and the skills list
│   ├── i18n/                UI strings (ui.ts) and language helpers
│   ├── layouts/Layout.astro
│   ├── lib/                 Helpers, e.g. experience.ts
│   ├── pages/               index, experience, blog (English is generated under /en/)
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
(`public/personal.jpg`) and the CV (`public/cv.pdf`) are set in
`src/data/profile.ts`.

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
