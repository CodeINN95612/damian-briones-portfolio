export const languages = {
  es: "Español",
  en: "English",
} as const;

export type ValidLanguage = keyof typeof languages;

export const defaultLanguage: ValidLanguage = "es" as const;
