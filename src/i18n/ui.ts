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
  };
  /** Screen-reader-only text. */
  a11y: {
    skip: string;
    newTab: string;
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
    },
    a11y: {
      skip: "Saltar al contenido",
      newTab: "(se abre en una pestaña nueva)",
    },
    hero: {
      name: "Damián Briones",
      role: "Ingeniero de Software Senior",
      description:
        "Construyo productos web de punta a punta, desde el modelo de datos hasta el último píxel.",
      location: "Ciudad, País",
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
        "Software empresarial desde 2019: facturación, banca, salud y retail. Dónde trabajé y qué construí ahí.",
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
    },
    a11y: {
      skip: "Skip to content",
      newTab: "(opens in a new tab)",
    },
    hero: {
      name: "Damian Briones",
      role: "Senior Software Engineer",
      description:
        "I build web products end to end, from the data model to the last pixel.",
      location: "City, Country",
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
        "Enterprise software since 2019: billing, banking, healthcare and retail. Where I've worked and what I built there.",
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
