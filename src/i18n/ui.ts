import { languages, type ValidLanguage } from "./lang";

type i18nStrings = {
  meta: {
    title: string;
  };
  nav: {
    home: string;
    experience: string;
    blog: string;
    /** Accessible names for the two nav landmarks and the ES/EN links. */
    main: string;
    language: string;
    languages: { es: string; en: string };
    footer: string;
  };
  /** Screen-reader-only text. */
  a11y: {
    skip: string;
    newTab: string;
  };
  footer: {
    tagline: string;
    available: string;
    explore: string;
    contact: string;
    rights: string;
    built: string;
  };
  hero: {
    /** Translated because the accent drops in English. */
    name: string;
    role: string;
    description: string;
    location: string;
    cv: string;
    whatsapp: string;
    portraitAlt: string;
  };
  skills: {
    title: string;
    categories: {
      cloud: string;
      containers: string;
      database: string;
      backend: string;
      runtime: string;
      cache: string;
    };
  };
  experience: {
    title: string;
    description: string;
    /** Stat labels next to the computed numbers (always plural). */
    years: string;
    companies: string;
    current: string;
    present: string;
    all: string;
    highlights: string;
    stack: string;
    caseStudies: string;
  };
  blog: {
    title: string;
    description: string;
    back: string;
    /** Home-page teaser section. */
    intro: string;
    all: string;
    empty: string;
    filter: string;
    filterAll: string;
    /** Before the company name on a post that came out of a job. */
    workedAt: string;
    categories: {
      "case-study": string;
      project: string;
      research: string;
      personal: string;
    };
  };
};

export const ui: Record<ValidLanguage, i18nStrings> = {
  es: {
    meta: {
      title: "Damián Briones",
    },
    nav: {
      home: "Inicio",
      experience: "Experiencia",
      blog: "Blog",
      main: "Principal",
      language: "Idioma",
      languages: { es: "Español", en: "English" },
      footer: "Pie de página",
    },
    a11y: {
      skip: "Saltar al contenido",
      newTab: "(se abre en una pestaña nueva)",
    },
    footer: {
      tagline:
        "Arquitectura de software, diseño y nube para equipos empresariales.",
      available: "Abierto a nuevas oportunidades",
      explore: "Explorar",
      contact: "Contacto",
      rights: "Todos los derechos reservados.",
      built: "Hecho con Astro",
    },
    hero: {
      name: "Damián Briones",
      role: "Ingeniero de Software Senior",
      description:
        "Ayudo a equipos a modernizar sistemas empresariales y llevarlos a la nube. Trabajo de backend y arquitectura en banca, logística y comercio.",
      location: "Quito, Ecuador",
      cv: "Descargar CV",
      whatsapp: "WhatsApp",
      portraitAlt: "Retrato de Damián Briones",
    },
    skills: {
      title: "Habilidades",
      categories: {
        cloud: "Nube",
        containers: "Contenedores",
        database: "Base de datos",
        backend: "Backend",
        runtime: "Runtime",
        cache: "Caché",
      },
    },
    experience: {
      title: "Experiencia",
      description:
        "Software empresarial desde 2019: banca, logística y comercio. Dónde trabajé y qué construí ahí.",
      years: "años de experiencia",
      companies: "empresas",
      current: "Actual",
      present: "hoy",
      all: "Ver experiencia completa",
      highlights: "Logros",
      stack: "Tecnologías",
      caseStudies: "Casos de estudio",
    },
    blog: {
      title: "Blog",
      description: "Notas sobre lo que voy construyendo.",
      back: "Volver al blog",
      intro:
        "Casos de estudio de proyectos reales y, de vez en cuando, notas sobre proyectos personales e investigación. Lo más reciente, aquí.",
      all: "Ver todos los artículos",
      empty: "El primer caso de estudio está en camino.",
      filter: "Filtrar por categoría",
      filterAll: "Todos",
      workedAt: "Trabajo realizado en",
      categories: {
        "case-study": "Caso de estudio",
        project: "Proyecto",
        research: "Investigación",
        personal: "Personal",
      },
    },
  },

  en: {
    meta: {
      title: "Damian Briones",
    },
    nav: {
      home: "Home",
      experience: "Experience",
      blog: "Blog",
      main: "Main",
      language: "Language",
      languages: { es: "Español", en: "English" },
      footer: "Footer",
    },
    a11y: {
      skip: "Skip to content",
      newTab: "(opens in a new tab)",
    },
    footer: {
      tagline:
        "Software architecture, design and cloud for enterprise teams.",
      available: "Open to new opportunities",
      explore: "Explore",
      contact: "Contact",
      rights: "All rights reserved.",
      built: "Built with Astro",
    },
    hero: {
      name: "Damian Briones",
      role: "Senior Software Engineer",
      description:
        "I help teams modernize and move enterprise systems to the cloud. Backend and architecture work across banking, logistics and commerce.",
      location: "Quito, Ecuador",
      cv: "Download CV",
      whatsapp: "WhatsApp",
      portraitAlt: "Portrait of Damian Briones",
    },
    skills: {
      title: "Skills",
      categories: {
        cloud: "Cloud",
        containers: "Containers",
        database: "Database",
        backend: "Backend",
        runtime: "Runtime",
        cache: "Cache",
      },
    },
    experience: {
      title: "Experience",
      description:
        "Enterprise software since 2019: banking, logistics and commerce. Where I've worked and what I built there.",
      years: "years of experience",
      companies: "companies",
      current: "Current",
      present: "present",
      all: "See full experience",
      highlights: "Highlights",
      stack: "Stack",
      caseStudies: "Case studies",
    },
    blog: {
      title: "Blog",
      description: "Notes on whatever I'm building.",
      back: "Back to blog",
      intro:
        "Case studies from real projects, plus the occasional note on side projects and research. The latest are right here.",
      all: "See all articles",
      empty: "The first case study is on its way.",
      filter: "Filter by category",
      filterAll: "All",
      workedAt: "Work done at",
      categories: {
        "case-study": "Case study",
        project: "Project",
        research: "Research",
        personal: "Personal",
      },
    },
  },
} as const;
