import type { Translations } from "./types";

export const es: Translations = {
  langToggle: "EN",
  navMenuAriaLabel: "Menú",

  nav: {
    about: "Sobre mí",
    skills: "Habilidades",
    experience: "Experiencia",
    projects: "Proyectos",
    education: "Estudios",
    contact: "Contacto",
  },

  hero: {
    eyebrow: "Portafolio · 2026",
    downloadCV: "Descargar CV",
    currentlyFocused: "Actualmente enfocado en",
    metaLocation: "Ubicación",
    metaExperience: "Experiencia",
    metaAvailability: "Disponibilidad",
    metaLanguages: "Idiomas",
    openToOpportunities: "Abierto a oportunidades",
    years: "años",
    portraitAlt: "Retrato",
    langIndicator: "ES · EN",
    copied: "Copiado",
  },

  about: {
    eyebrow: "01 · Sobre mí",
    subtitle: "La versión corta, escrita para humanos.",
    aboutHeading: "Lo que me define",
    hobbiesHeading: "Fuera del trabajo",
  },

  skills: {
    eyebrow: "02 · Habilidades",
    subtitle:
      "Tecnologías que uso día a día o he usado extensamente, además de algunas que estoy explorando actualmente.",
    groups: [
      { label: "Lenguajes y Entornos" },
      { label: "Frontend" },
      { label: "Datos" },
      { label: "Nube y DevOps" },
      { label: "IA y Herramientas" },
      { label: "Aprendiendo actualmente" },
    ],
  },

  experience: {
    eyebrow: "03 · Experiencia",
    subtitle:
      "Mi trayectoria profesional en Ingeniería de Software. Más reciente primero.",
    at: "en",
    showLess: "Ver menos",
    showMore: (n) => `Mostrar ${n} ${n === 1 ? "rol" : "roles"} más`,
    entries: [
      {
        summary:
          "Ingeniero full-stack en una plataforma de análisis de e-commerce con base en EE. UU.",
        bullets: [
          "Diseñé y desplegué múltiples microservicios en AWS (ECS, Lambda, Fargate), fragmentando un pipeline de análisis monolítico.",
          "Arquitecté nuevo software interno con arquitectura monolítica modular en AWS (ECS + Fargate), backend .NET y frontend Vue.",
          "Mantuve software existente en distintos stacks, incluyendo apps Node públicas y herramientas .NET.",
          "Colaboré con equipos de producto y frontend en distintas zonas horarias para definir y entregar funcionalidades eficientemente.",
        ],
      },
      {
        summary: "Líder técnico en una plataforma de gestión logística.",
        bullets: [
          "Lideré la extracción de múltiples módulos de un monolito legacy a microservicios .NET independientes desplegados con Docker en Azure.",
          "Actué como líder del equipo de ingeniería, coordinando ceremonias, resolviendo bloqueos y manteniendo una entrega predecible.",
          "Refactoricé cuellos de botella críticos en SQL, reduciendo el tiempo de generación de reportes por varios minutos.",
        ],
      },
      {
        summary:
          "Ingeniero en una plataforma financiera de cumplimiento normativo que da servicio a bancos a nivel nacional.",
        bullets: [
          "Mantuve y extendí una plataforma financiera .NET utilizada por numerosos bancos, gestionando flujos de trabajo sensibles al cumplimiento.",
          "Refactoricé módulos Silverlight a .NET moderno, reduciendo reportes de bugs y mejorando el rendimiento y la mantenibilidad.",
          "Incorporé y mentoré a varios desarrolladores nuevos, escribiendo guías internas que siguen en uso hoy.",
        ],
      },
    ],
  },

  projects: {
    eyebrow: "04 · Proyectos",
    subtitle:
      "Proyectos personales y exploraciones. La mayoría están disponibles para que los revises.",
    showLess: "Ver menos",
    showMore: (n) => `Mostrar ${n} ${n === 1 ? "proyecto" : "proyectos"} más`,
    entries: [
      {
        blurb:
          "App simple pero efectiva para registrar entrenamientos en el gimnasio.",
        role: "Proyecto personal",
        links: [{ label: "En vivo" }, { label: "GitHub" }],
      },
      {
        blurb: "Mi portafolio personal de desarrollador.",
        role: "Proyecto personal",
        links: [{ label: "En vivo" }, { label: "GitHub" }],
      },
      {
        blurb:
          "Mod de Minecraft que añade el objeto oxificador al juego. (Ya no se mantiene)",
        role: "Proyecto personal",
        links: [{ label: "En vivo" }, { label: "GitHub" }],
      },
      {
        blurb:
          "Demo de autenticación para una serie de YouTube sobre auth en .NET. Gestiona JWT, Usuarios, Roles y Permisos.",
        role: "Proyecto personal",
        links: [{ label: "En vivo" }, { label: "GitHub" }],
      },
    ],
  },

  education: {
    eyebrow: "05 · Estudios",
    subtitle:
      "Formación académica. El resto vino de trabajar en proyectos reales.",
    entries: [
      {
        degree: "Licenciatura en Ingeniería de Software",
        notes:
          "Proyecto de grado sobre chatbots de IA personalizados para estudiantes prospecto de la universidad.",
      },
    ],
  },

  contact: {
    eyebrow: "06 · Contacto",
    subtitle:
      "La forma más rápida de contactarme. Haz clic en cualquier línea para copiar.",
    heading: "Hablemos.",
    leadText:
      "Aunque no estoy buscando nuevas posiciones actualmente, estoy feliz de charlar sobre diseño de sistemas, contrataciones, oportunidades de negocio o cualquier otra cosa.",
    copyButton: "Copiar",
    copiedButton: "Copiado ✓",
    labels: {
      email: "Correo",
      phone: "Teléfono",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
  },

  footer: {
    builtYear: "Hecho en 2026",
  },

  profile: {
    title: "Ingeniero de Software Senior",
    tagline:
      "Me gusta de verdad la ingeniería de software, y construyo cosas que sí me importan.",
    about:
      "Ingeniero full-stack en .NET y el ecosistema JavaScript, cómodo en entornos cloud (AWS / Azure) y contenerizados.",
    currentlyExploring:
      "Profundizando en diseño de sistemas: arquitecturas distribuidas, backends escalables y estrategias de despliegue.",
    spokenLanguages: [
      { name: "Español", level: "Nativo" },
      { name: "Inglés", level: "Avanzado (C1)" },
    ],
  },

  hobbies: [
    {
      label: "Gaming",
      note: "Minecraft principalmente, pero abierto a casi cualquier cosa.",
    },
    {
      label: "Lectura",
      note: "Leería casi cualquier libro que caiga en mis manos.",
    },
    {
      label: "Programación",
      note: "Sí, lo disfruto fuera del trabajo, incluso los fines de semana.",
    },
    { label: "Gym", note: "Mantiene la mente despejada." },
  ],

  freelance: [
    {
      blurb:
        "Bot de Discord para gestionar pagos y roles en una comunidad de traducción.",
    },
    {
      blurb:
        "Chatbot de IA para atención al cliente, personalizado con información de la institución.",
    },
  ],
};
