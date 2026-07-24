import { languages, type ValidLanguage } from "./lang";

type i18nStrings = {
  meta: {
    title: string;
  };
  nav: {
    home: string;
    blog: string;
  };
  hero: {
    /** Translated because the accent drops in English. */
    name: string;
    role: string;
    description: string;
    location: string;
    cv: string;
    whatsapp: string;
    email: string;
    portraitAlt: string;
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
    hero: {
      name: "Damián Briones",
      role: "Ingeniero de Software Senior",
      description:
        "Construyo productos web de punta a punta, desde el modelo de datos hasta el último píxel.",
      location: "Ciudad, País",
      cv: "Descargar CV",
      whatsapp: "WhatsApp",
      email: "Enviar un correo",
      portraitAlt: "Retrato de Damián Briones",
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
    hero: {
      name: "Damian Briones",
      role: "Senior Software Engineer",
      description:
        "I build web products end to end, from the data model to the last pixel.",
      location: "City, Country",
      cv: "Download CV",
      whatsapp: "WhatsApp",
      email: "Send an email",
      portraitAlt: "Portrait of Damian Briones",
    },
    blog: {
      title: "Blog",
      description: "Notes on whatever I'm building.",
      back: "Back to blog",
    },
  },
} as const;
