# Accessibility

Every interactive element must be as clear with a keyboard as with a mouse.
Anything a hover reveals must also appear on keyboard focus.

## Interactive states

- **Mirror every hover cue on focus.** Wherever there's a `hover:` or
  `group-hover:` class, add the same `focus-visible:` / `group-focus-visible:`
  class (title colour, arrow nudge, accent sweep, …).
- **Keep the focus ring.** `global.css` gives every `:focus-visible` element a
  2px primary outline. Never use `outline-none` / `outline-hidden` on anything
  focusable. The exception is `<main tabindex="-1">`, which is only a skip-link
  target. In Tailwind v4, `outline-none` also cancels `outline-2`.
- **Don't signal state with the accent colour alone.** `#d3a775` has only 2:1
  contrast, so treat it as decoration. A selected or current item also gets a
  darker colour and a weight change (`font-medium`), plus the right ARIA state:
  - `aria-pressed` for toggle buttons such as the blog filters;
  - `aria-current="page"` for links to the current page. `Link.astro` sets it
    automatically; style it with `aria-[current=page]:`.
- **Use real elements.** A `<button>` for actions, an `<a>` for navigation. No
  clickable `<div>`s. Anything custom must work with Tab, Enter and Space.

## Colour contrast (on `bg-background`)

| Use                              | Minimum                                     |
| -------------------------------- | ------------------------------------------- |
| Readable text                    | `text-foreground/60` (4.9:1)                |
| Primary-coloured text under 24px | `text-primary-ink`, not `text-primary` (3.4:1) |
| Behind small text (e.g. buttons) | `bg-primary-ink` with `text-background`      |
| Icons, rings, large headings     | `primary` is fine (3:1 needed)              |
| Decoration only                  | `/10`–`/40`, `accent` (dividers, separators, numbers) |

Hide purely decorative text, such as separators and row numbers, with
`aria-hidden="true"`.

## Content and structure

- **Accessible names match the visible text.** Don't add an `aria-label` that
  replaces the visible text. Icons are `aria-hidden` (`Icon.astro` does this).
  An icon-only control needs an `aria-label`.
- **External links:** a link with `target="_blank"` gets
  `<span class="sr-only">{t("a11y.newTab")}</span>`.
- **Headings:** one `h1` per page, and levels in order (sections `h2`, items
  in them `h3`).
- **Page titles:** each page passes `title` to `<Layout>` for a distinct tab
  title.
- **Translations:** new screen-reader text lives in `ui.ts`, in both languages.
  Text in another language gets a `lang` attribute.

## Motion

- Animations are for enhancement only. Content must never depend on them. For
  example, `.reveal` only hides content when JS is on.
- `global.css` cuts transitions and animations when the system asks for reduced
  motion. Loops like `animate-ping` still go under `motion-safe:`.
