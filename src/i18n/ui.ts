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
    /** The phone-width menu button. */
    menu: string;
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
  services: {
    title: string;
    intro: string;
    modernization: { title: string; text: string };
    cloud: { title: string; text: string };
    architecture: { title: string; text: string };
  };
  cta: {
    title: string;
    text: string;
    email: string;
  };
  notFound: {
    title: string;
    text: string;
    home: string;
  };
  skills: {
    title: string;
    categories: {
      cloud: string;
      containers: string;
      database: string;
      backend: string;
      ai: string;
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
    readMore: string;
    readLess: string;
  };
  blog: {
    title: string;
    description: string;
    /** Meta description for /blog, which needs more than the page subtitle. */
    seo: string;
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
      menu: "Menú",
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
    services: {
      title: "Trabajemos juntos",
      intro:
        "Tres formas en que puedo ayudar a un equipo que mantiene software empresarial.",
      modernization: {
        title: "Modernización",
        text: "Llevar un sistema heredado a una plataforma actual sin detener el negocio. He pasado servicios de .NET Framework a .NET moderno y empecé a dividir un monolito en microservicios.",
      },
      cloud: {
        title: "Nube e infraestructura",
        text: "Poner los sistemas a correr en AWS con contenedores e infraestructura como código. Trabajo con Docker, OpenTofu y Azure DevOps.",
      },
      architecture: {
        title: "Arquitectura y rendimiento",
        text: "Diseñar sistemas que se puedan mantener y encontrar por qué los lentos son lentos. He bajado consultas de minutos a milisegundos.",
      },
    },
    cta: {
      title: "¿Tienes un sistema que necesita modernizarse?",
      text: "Cuéntame. Respondo por correo o WhatsApp, en español o en inglés.",
      email: "Enviar un correo",
    },
    notFound: {
      title: "Página no encontrada",
      text: "Esta dirección no existe o cambió de lugar.",
      home: "Volver al inicio",
    },
    skills: {
      title: "Habilidades",
      categories: {
        cloud: "Nube",
        containers: "Contenedores",
        database: "Base de datos",
        backend: "Backend",
        ai: "IA",
        cache: "Caché",
      },
    },
    experience: {
      title: "Experiencia",
      description:
        "Software empresarial desde 2019: banca, logística y comercio. Empecé arreglando sistemas y terminé diseñándolos.",
      years: "años de experiencia",
      companies: "empresas",
      current: "Actual",
      present: "hoy",
      all: "Ver experiencia completa",
      highlights: "Logros",
      stack: "Tecnologías",
      caseStudies: "Casos de estudio",
      readMore: "Leer más",
      readLess: "Leer menos",
    },
    blog: {
      title: "Blog",
      description: "Notas sobre lo que voy construyendo.",
      seo: "Casos de estudio de proyectos empresariales reales, más notas sobre proyectos personales e investigación. Por Damián Briones.",
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
      menu: "Menu",
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
    services: {
      title: "Work with me",
      intro:
        "Three ways I can help a team that runs enterprise software.",
      modernization: {
        title: "Modernization",
        text: "Move a legacy system to a current platform without stopping the business. I've taken services from .NET Framework to modern .NET and started splitting a monolith into microservices.",
      },
      cloud: {
        title: "Cloud and infrastructure",
        text: "Get systems running on AWS with containers and infrastructure as code. I work with Docker, OpenTofu and Azure DevOps.",
      },
      architecture: {
        title: "Architecture and performance",
        text: "Design systems that stay maintainable, and find out why the slow ones are slow. I've cut queries from minutes to milliseconds.",
      },
    },
    cta: {
      title: "Have a system that needs modernizing?",
      text: "Tell me about it. I reply by email or WhatsApp, in English or Spanish.",
      email: "Send an email",
    },
    notFound: {
      title: "Page not found",
      text: "This address doesn't exist or has moved.",
      home: "Back to home",
    },
    skills: {
      title: "Skills",
      categories: {
        cloud: "Cloud",
        containers: "Containers",
        database: "Database",
        backend: "Backend",
        ai: "AI",
        cache: "Cache",
      },
    },
    experience: {
      title: "Experience",
      description:
        "Enterprise software since 2019: banking, logistics and commerce. I started by fixing systems and ended up designing them.",
      years: "years of experience",
      companies: "companies",
      current: "Current",
      present: "present",
      all: "See full experience",
      highlights: "Highlights",
      stack: "Stack",
      caseStudies: "Case studies",
      readMore: "Read more",
      readLess: "Read less",
    },
    blog: {
      title: "Blog",
      description: "Notes on whatever I'm building.",
      seo: "Case studies from real enterprise projects, plus notes on side projects and research. By Damian Briones.",
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
