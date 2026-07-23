import { languages, type ValidLanguage } from "./lang";

type i18nStrings = {
  meta: {
    title: string;
  };
  nav: {
    home: string;
  };
};

export const ui: Record<ValidLanguage, i18nStrings> = {
  es: {
    meta: {
      title: "Damián Briones",
    },
    nav: {
      home: "Inicio",
    },
  },

  en: {
    meta: {
      title: "Damian Briones",
    },
    nav: {
      home: "Home",
    },
  },
} as const;
