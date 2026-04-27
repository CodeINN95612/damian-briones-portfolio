const PROFILE = {
  name: "Damián Briones",
  title: "Senior Software Engineer",
  location: "Quito, Ecuador",
  yearsExp: 7,
  tagline:
    "Pragmatic engineer who ships. I care about clear thinking, calm code, and building things teams can maintain after I'm gone.",
  about:
    "Full-stack engineer across .NET and the JavaScript ecosystem, comfortable in cloud (AWS / Azure) and containerized environments.",
  currentlyExploring:
    "Pivoting into system design — distributed architectures, scalable backends, and deployment strategies.",
  contact: {
    email: "work@damianbriones.dev",
    phone: "+593 98 762 1334",
    linkedin: "linkedin.com/in/damian-briones-flachier",
    github: "github.com/CodeINN95612",
  },
  spokenLanguages: [
    { name: "Spanish", level: "Native" },
    { name: "English", level: "Advanced (C1)" },
  ],
};

const SKILL_GROUPS = [
  {
    label: "Languages & Runtimes",
    items: [".NET / C#", "Node.js", "JavaScript", "TypeScript"],
  },
  {
    label: "Frontend",
    items: ["React", "Vue"],
  },
  {
    label: "Data",
    items: ["SQL (Postgres, SQL Server, MySql)", "NoSQL (MongoDB, DynamoDB)"],
  },
  {
    label: "Cloud & DevOps",
    items: ["AWS", "Azure", "Docker", "Git"],
  },
  {
    label: "AI & tooling",
    items: ["Agentic development", "Cursor", "Claude"],
  },
  {
    label: "Currently learning",
    items: ["System Design", "Distributed Systems", "Architecture Patterns"],
  },
];

const EXPERIENCE = [
  {
    role: "Senior Software Engineer",
    company: "MikMak by Spins",
    period: "Oct 2025 — Present",
    location: "Remote (US-based)",
    summary: "Full-stack engineer on a US-based e-commerce analytics platform.",
    bullets: [
      "Architected and shipped many microservices on AWS (ECS, Lambda, Fargate), breaking apart a monolithic analytics pipeline.",
      "Architected new internal software using modular monolythic architecture, in AWS (ECS + Fargate) with a .NET backend and Vue frontend.",
      "Maintained existing software in different stacks, including public-facing Node apps and .NET-based tools.",
      "Collaborated with product and frontend teams across time zones to scope and deliver features efficiently.",
    ],
    stack: [
      "Node.js",
      "AWS",
      "MongoDB",
      "MySql",
      "Docker",
      ".NET",
      "Vue",
      "Cursor",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Logiztik Alliance Group",
    period: "Aug 2023 — Sep 2025",
    location: "Quito, Ecuador",
    summary: "Technical lead on a logistics management platform.",
    bullets: [
      "Led the extraction of many modules from a legacy monolith into standalone .NET microservices deployed via Docker on Azure.",
      "Acted as leader for a team of engineers — ran ceremonies, cleared blockers, and kept delivery predictable.",
      "Refactored critical SQL bottlenecks, cutting report generation time from X seconds to under Y.",
    ],
    stack: ["C#", ".NET", "SQL", "Docker", "Azure DevOps", "Scrum"],
  },
  {
    role: "Junior Software Engineer",
    company: "CloudStudio",
    period: "2019 — 2023",
    location: "Quito, Ecuador",
    summary:
      "Engineer on a compliance-sensitive financial platform serving banks nationwide.",
    bullets: [
      "Maintained and extended a .NET financial platform used by plenty of banks, handling compliance-sensitive workflows.",
      "Refactored Silverlight-era modules to modern .NET, reducing bug reports while increasing performance and maintainability.",
      "Onboarded and mentored several new developers, writing internal guides that are still in use today.",
    ],
    stack: ["C#", ".NET", "SQL", "Silverlight"],
  },
];

const PROJECTS = [
  {
    name: "Gym Train Log",
    blurb: "Simple, but effective workout tracking app for gym-goers.",
    role: "Solo project",
    stack: ["Claude Code", "SqlLite", "Flutter"],
    links: [
      { label: "Live", url: "https://codeinn95612.github.io/gym-log-train/" },
      {
        label: "GitHub",
        url: "https://github.com/CodeINN95612/gym-log-train",
      },
    ],
  },
  {
    name: "Developer Portfolio",
    blurb: "My personal developer portfolio.",
    role: "Solo project",
    stack: ["React", "Css", "TypeScript", "Claude Design"],
    links: [
      { label: "Live", url: "https://www.damianbriones.dev" },
      {
        label: "GitHub",
        url: "https://github.com/CodeINN95612/damian-briones-portfolio",
      },
    ],
  },
  {
    name: "Oxify Mod",
    blurb:
      "Minecraft mod that adds an oxifier item to the game. (No longer maintained)",
    role: "Solo project",
    stack: ["Java", "Fabric"],
    links: [
      { label: "Live", url: "https://modrinth.com/mod/oxify" },
      {
        label: "GitHub",
        url: "https://github.com/CodeINN95612/OxifyMod",
      },
    ],
  },
  {
    name: "Auth Enterprise",
    blurb:
      "Authentication demo for a YouTube series about .NET auth. Manages JWT, Users, Roles, and Permissions.",
    role: "Solo project",
    stack: [
      ".NET",
      "C#",
      "Entity Framework",
      "PostgreSQL",
      "Docker",
      "Vertical Slice Architecture",
    ],
    links: [
      { label: "Live", url: "https://www.youtube.com/watch?v=rcRMXLr4f60" },
      {
        label: "GitHub",
        url: "https://github.com/CodeINN95612/AuthEnterprise",
      },
    ],
  },
];

const EDUCATION = [
  {
    degree: "Bachelor of Software Engineering",
    school: "Universidad de las Américas (UDLA)",
    period: "2019 — 2023",
    location: "Quito, Ecuador",
    notes:
      "Capstone on custom AI chatbots for prospective students at the university.",
  },
];

const HOBBIES = [
  {
    label: "Gaming",
    note: "Minecraft mostly, but open to almost anything.",
  },
  {
    label: "Reading",
    note: "Would read almost every book I can get my hands on.",
  },
  {
    label: "Programming",
    note: "Yes, I enjoy it outside of work, even on weekends.",
  },
  { label: "Gym", note: "Keeps the head clear." },
];

const FREELANCE = [
  {
    name: "Cyan-Bot",
    client: "Independent",
    blurb:
      "Discord bot for managing payments and roles in a translation community.",
    duration: "3 months",
    stack: ["Python", "MongoDB"],
  },
  {
    name: "ULI",
    client: "Universidad de las Américas",
    blurb:
      "AI chatbot for customer service, customized with information about the institution.",
    duration: "1 year",
    stack: ["Python", "React", "C#", "SignalR", "Azure"],
  },
];

const UI_CONTENT = {
  // Navigation
  nav: [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ],

  // Hero Section
  hero: {
    eyebrow: "Portfolio · 2026",
    downloadCV: "Download CV",
  },

  // About Section
  about: {
    eyebrow: "01 · About",
    subtitle: "The short version, written for humans.",
    headings: {
      about: "What I'm about",
      hobbies: "Outside of work",
    },
  },

  // Skills Section
  skills: {
    eyebrow: "02 · Skills",
    subtitle:
      "Technologies I use day-to-day or have used extensively in the past, plus a few I'm currently exploring.",
  },

  // Experience Section
  experience: {
    eyebrow: "03 · Experience",
    subtitle:
      "My professional journey in Software Engineering. Most recent first.",
  },

  // Projects Section
  projects: {
    eyebrow: "04 · Projects",
    subtitle:
      "Side projects and explorations. Most are open for you to look into.",
  },

  // Education Section
  education: {
    eyebrow: "05 · Education",
    subtitle: "Formal training. The rest came from shipping.",
  },

  // Contact Section
  contact: {
    eyebrow: "06 · Contact",
    subtitle: "The fastest way to reach me. Click any line to copy.",
    heading: "Let's talk.",
    leadText:
      "Although I am not currently looking for new positions, I am happy to chat about system design, hiring, business opportunities or anything in between.",
    copyButton: "Copy",
    copiedButton: "Copied ✓",
  },

  // Footer
  footer: {
    builtYear: "Built 2026",
  },
};

export const DATA = {
  PROFILE,
  SKILL_GROUPS,
  EXPERIENCE,
  FREELANCE,
  PROJECTS,
  EDUCATION,
  HOBBIES,
  UI_CONTENT,
} as const;
