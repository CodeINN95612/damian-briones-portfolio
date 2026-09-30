# Portfolio

A bilingual (es/en) Astro portfolio for freelance software architecture, design
and cloud work. `README.md` is the guide to the pages, structure and content
model; read it first and keep it current (see `.claude/rules/readme.md`).
Accessibility rules are in `.claude/rules/accessibility.md`.

## Conventions

- **Two languages, always.** Spanish is the default (no URL prefix), English is
  under `/en/`. Every UI string goes in `src/i18n/ui.ts` in both languages, and
  every blog post or job needs an `es` and an `en` file with the same slug.
- **Contact details live in `src/data/profile.ts`.** Components read from it;
  never hard-code an email, handle or phone number. All values are placeholders
  for now.
- **Icons are inline SVGs in `src/components/Icon.astro`.** Line icons are
  Lucide. Brand glyphs are Simple Icons and must also be added to the `solid`
  set so they render filled. No icon library.
- **Internal links use `Link.astro`**, which handles the locale prefix and sets
  `aria-current`. Don't hand-write `/en/...` paths.
- **Tailwind v4.** Colour tokens are in `src/styles/global.css`. Use
  `text-primary-ink` (not `text-primary`) for small primary-coloured text.
- **Scroll reveal:** add the `.reveal` class; `Layout.astro` adds `.is-visible`
  once the element is on screen. The page uses the `ClientRouter`, so page
  scripts must run on `astro:page-load`, not once at load.
- **Case studies can be anonymous.** A post's `experience` field is optional;
  leave it out when there's no job to link to.

## Checking your work

- `pnpm build` is the check. `astro check` doesn't work here because it doesn't
  support TypeScript 7.
- Test in the browser at `localhost:4321` (`pnpm dev`), on both a desktop and a
  phone-width viewport. Prefer DOM checks over screenshots, which can come back
  blank or stale.

## Working with me

- Don't commit unless asked.
