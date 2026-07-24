/**
 * Contact details and asset paths. Everything here is language-agnostic —
 * translatable copy (name, role, description, labels) lives in src/i18n/ui.ts.
 *
 * All values are placeholders for now.
 */
export const profile = {
  email: "placeholder@example.com",

  /** Digits only, country code included — wa.me rejects "+", spaces and dashes. */
  phone: "59100000000",
  /** The same number, formatted for humans. */
  phoneDisplay: "+591 000 00000",

  linkedin: "https://www.linkedin.com/in/placeholder/",
  linkedinHandle: "/in/placeholder",

  /** TODO: drop the real PDF at public/cv.pdf */
  cv: "/cv.pdf",
  /** TODO: replace with the real portrait */
  image: "/portrait-placeholder.svg",
} as const;
