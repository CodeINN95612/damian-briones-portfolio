import { ui } from "./ui";
import { defaultLanguage, type ValidLanguage } from "./lang";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as ValidLanguage;
  return defaultLanguage;
}

type UIStrings = (typeof ui)[ValidLanguage];

/** "meta.title" | "nav.home" — every path through the object that ends in a string. */
type TranslationKey<T = UIStrings> = {
  [K in keyof T & string]: T[K] extends string
    ? K
    : `${K}.${TranslationKey<T[K]>}`;
}[keyof T & string];

function resolve(strings: UIStrings, key: string): string | undefined {
  const value = key
    .split(".")
    .reduce<unknown>(
      (acc, part) =>
        typeof acc === "object" && acc !== null
          ? (acc as Record<string, unknown>)[part]
          : undefined,
      strings,
    );
  return typeof value === "string" ? value : undefined;
}

export function useTranslations(lang: ValidLanguage) {
  const localizedUI = ui[lang];
  return function t(key: TranslationKey): string {
    return resolve(localizedUI, key) ?? resolve(ui[defaultLanguage], key) ?? key;
  };
}

export function useCurrentLanguage(
  currentLocale: string | undefined,
): ValidLanguage {
  if (!currentLocale) {
    return defaultLanguage;
  }

  if (currentLocale in ui) {
    return currentLocale as ValidLanguage;
  }

  return defaultLanguage;
}
