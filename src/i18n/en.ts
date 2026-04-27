import type { Translations } from "./types";

export const en: Translations = {
  langToggle: "ES",
  navMenuAriaLabel: "Menu",

  nav: {
    about: "About",
    skills: "Skills",
    experience: "Experience",
    projects: "Projects",
    education: "Education",
    contact: "Contact",
  },

  hero: {
    eyebrow: "Portfolio · 2026",
    downloadCV: "Download CV",
    currentlyFocused: "Currently focused on",
    metaLocation: "Location",
    metaExperience: "Experience",
    metaAvailability: "Availability",
    metaLanguages: "Languages",
    openToOpportunities: "Open to opportunities",
    years: "years",
    portraitAlt: "Portrait",
    langIndicator: "EN · ES",
    copied: "Copied",
  },

  about: {
    eyebrow: "01 · About",
    subtitle: "The short version, written for humans.",
    aboutHeading: "What I'm about",
    hobbiesHeading: "Outside of work",
  },

  skills: {
    eyebrow: "02 · Skills",
    subtitle:
      "Technologies I use day-to-day or have used extensively in the past, plus a few I'm currently exploring.",
    groups: [
      { label: "Languages & Runtimes" },
      { label: "Frontend" },
      { label: "Data" },
      { label: "Cloud & DevOps" },
      { label: "AI & tooling" },
      { label: "Currently learning" },
    ],
  },

  experience: {
    eyebrow: "03 · Experience",
    subtitle:
      "My professional journey in Software Engineering. Most recent first.",
    at: "at",
    showLess: "Show less",
    showMore: (n) => `Show ${n} more ${n === 1 ? "role" : "roles"}`,
    entries: [
      {
        summary:
          "Full-stack engineer on a US-based e-commerce analytics platform.",
        bullets: [
          "Architected and shipped many microservices on AWS (ECS, Lambda, Fargate), breaking apart a monolithic analytics pipeline.",
          "Architected new internal software using modular monolithic architecture, in AWS (ECS + Fargate) with a .NET backend and Vue frontend.",
          "Maintained existing software in different stacks, including public-facing Node apps and .NET-based tools.",
          "Collaborated with product and frontend teams across time zones to scope and deliver features efficiently.",
        ],
      },
      {
        summary: "Technical lead on a logistics management platform.",
        bullets: [
          "Led the extraction of many modules from a legacy monolith into standalone .NET microservices deployed via Docker on Azure.",
          "Acted as leader for a team of engineers, running ceremonies, clearing blockers, and keeping delivery predictable.",
          "Refactored critical SQL bottlenecks, cutting report generation time by several minutes.",
        ],
      },
      {
        summary:
          "Engineer on a compliance-sensitive financial platform serving banks nationwide.",
        bullets: [
          "Maintained and extended a .NET financial platform used by plenty of banks, handling compliance-sensitive workflows.",
          "Refactored Silverlight-era modules to modern .NET, reducing bug reports while increasing performance and maintainability.",
          "Onboarded and mentored several new developers, writing internal guides that are still in use today.",
        ],
      },
    ],
  },

  projects: {
    eyebrow: "04 · Projects",
    subtitle:
      "Side projects and explorations. Most are open for you to look into.",
    showLess: "Show less",
    showMore: (n) => `Show ${n} more ${n === 1 ? "project" : "projects"}`,
    entries: [
      {
        blurb: "Simple, but effective workout tracking app for gym-goers.",
        role: "Solo project",
        links: [{ label: "Live" }, { label: "GitHub" }],
      },
      {
        blurb: "My personal developer portfolio.",
        role: "Solo project",
        links: [{ label: "Live" }, { label: "GitHub" }],
      },
      {
        blurb:
          "Minecraft mod that adds an oxifier item to the game. (No longer maintained)",
        role: "Solo project",
        links: [{ label: "Live" }, { label: "GitHub" }],
      },
      {
        blurb:
          "Authentication demo for a YouTube series about .NET auth. Manages JWT, Users, Roles, and Permissions.",
        role: "Solo project",
        links: [{ label: "Live" }, { label: "GitHub" }],
      },
    ],
  },

  education: {
    eyebrow: "05 · Education",
    subtitle: "Formal training. The rest came from shipping.",
    entries: [
      {
        degree: "Bachelor of Software Engineering",
        notes:
          "Capstone on custom AI chatbots for prospective students at the university.",
      },
    ],
  },

  contact: {
    eyebrow: "06 · Contact",
    subtitle: "The fastest way to reach me. Click any line to copy.",
    heading: "Let's talk.",
    leadText:
      "Although I am not currently looking for new positions, I am happy to chat about system design, hiring, business opportunities or anything in between.",
    copyButton: "Copy",
    copiedButton: "Copied ✓",
    labels: {
      email: "Email",
      phone: "Phone",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
  },

  footer: {
    builtYear: "Built 2026",
  },

  profile: {
    title: "Senior Software Engineer",
    tagline:
      "I genuinely enjoy software engineering, which is probably why I actually care about what I ship.",
    about:
      "Full-stack engineer across .NET and the JavaScript ecosystem, comfortable in cloud (AWS / Azure) and containerized environments.",
    currentlyExploring:
      "Pivoting into system design: distributed architectures, scalable backends, and deployment strategies.",
    spokenLanguages: [
      { name: "Spanish", level: "Native" },
      { name: "English", level: "Advanced (C1)" },
    ],
  },

  hobbies: [
    { label: "Gaming", note: "Minecraft mostly, but open to almost anything." },
    {
      label: "Reading",
      note: "Would read almost every book I can get my hands on.",
    },
    {
      label: "Programming",
      note: "Yes, I enjoy it outside of work, even on weekends.",
    },
    { label: "Gym", note: "Keeps the head clear." },
  ],

  freelance: [
    {
      blurb:
        "Discord bot for managing payments and roles in a translation community.",
    },
    {
      blurb:
        "AI chatbot for customer service, customized with information about the institution.",
    },
  ],
};
