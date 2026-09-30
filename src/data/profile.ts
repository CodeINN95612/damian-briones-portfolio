/**
 * Contact details and asset paths. Everything here is language-agnostic —
 * translatable copy (name, role, description, labels) lives in src/i18n/ui.ts.
 *
 * Carried over from the old React portfolio (the `main` branch).
 */
export const profile = {
  email: "work@damianbriones.dev",

  /** Digits only, country code included — wa.me rejects "+", spaces and dashes. */
  phone: "593987621334",
  /** The same number, formatted for humans. */
  phoneDisplay: "+593 98 762 1334",

  linkedin: "https://www.linkedin.com/in/damian-briones-flachier/",
  linkedinHandle: "/in/damian-briones-flachier",

  github: "https://github.com/CodeINN95612",
  githubHandle: "@CodeINN95612",

  cv: "/cv.pdf",
  image: "/personal.jpg",
} as const;

/**
 * The skills list, in display order. `icon` is a key in Icon.astro and
 * `category` a key under skills.categories in src/i18n/ui.ts.
 */
export const skills = [
  { name: "AWS", icon: "aws", category: "cloud" },
  { name: "Docker", icon: "docker", category: "containers" },
  { name: "PostgreSQL", icon: "postgresql", category: "database" },
  { name: ".NET", icon: "dotnet", category: "backend" },
  { name: "Node.js", icon: "node", category: "runtime" },
  { name: "Redis", icon: "redis", category: "cache" },
] as const;
