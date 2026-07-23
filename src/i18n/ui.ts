import { languages, type ValidLanguage } from "./lang";

type i18nStrings = {
  meta: {
    title: string;
  };
  nav: {
    home: string;
    blog: string;
  };
  blog: {
    title: string;
    description: string;
    back: string;
  };
};

export const ui: Record<ValidLanguage, i18nStrings> = {
  es: {
    meta: {
      title: "Damián Briones",
    },
    nav: {
      home: "Inicio",
      blog: "Blog",
    },
    blog: {
      title: "Blog",
      description: "Notas sobre lo que voy construyendo.",
      back: "Volver al blog",
    },
  },

  en: {
    meta: {
      title: "Damian Briones",
    },
    nav: {
      home: "Home",
      blog: "Blog",
    },
    blog: {
      title: "Blog",
      description: "Notes on whatever I'm building.",
      back: "Back to blog",
    },
  },
} as const;
