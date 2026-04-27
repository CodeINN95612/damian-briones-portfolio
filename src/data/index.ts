export const NAV_IDS = [
  "about",
  "skills",
  "experience",
  "projects",
  "education",
  "contact",
] as const;

const PROFILE = {
  name: "Damián Briones",
  location: "Quito, Ecuador",
  yearsExp: 7,
  contact: {
    email: "work@damianbriones.dev",
    phone: "+593 98 762 1334",
    linkedin: "linkedin.com/in/damian-briones-flachier",
    github: "github.com/CodeINN95612",
  },
};

const SKILL_GROUPS = [
  {
    featured: false,
    items: [".NET / C#", "Node.js", "JavaScript", "TypeScript"],
  },
  {
    featured: false,
    items: ["React", "Vue"],
  },
  {
    featured: false,
    items: ["SQL (Postgres, SQL Server, MySql)", "NoSQL (MongoDB, DynamoDB)"],
  },
  {
    featured: false,
    items: ["AWS", "Azure", "Docker", "Git"],
  },
  {
    featured: false,
    items: ["Agentic development", "Cursor", "Claude"],
  },
  {
    featured: true,
    items: ["System Design", "Distributed Systems", "Architecture Patterns"],
  },
];

const EXPERIENCE = [
  {
    role: "Senior Software Engineer",
    company: "MikMak by Spins",
    period: "Oct 2025 — Present",
    location: "Remote (US-based)",
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
    stack: ["C#", ".NET", "SQL", "Docker", "Azure DevOps", "Scrum"],
  },
  {
    role: "Junior Software Engineer",
    company: "CloudStudio",
    period: "2019 — 2023",
    location: "Quito, Ecuador",
    stack: ["C#", ".NET", "SQL", "Silverlight"],
  },
];

const PROJECTS = [
  {
    name: "Gym Train Log",
    stack: ["Claude Code", "SqlLite", "Flutter"],
    links: [
      { url: "https://codeinn95612.github.io/gym-log-train/" },
      { url: "https://github.com/CodeINN95612/gym-log-train" },
    ],
  },
  {
    name: "Developer Portfolio",
    stack: ["React", "Css", "TypeScript", "Claude Design"],
    links: [
      { url: "https://www.damianbriones.dev" },
      { url: "https://github.com/CodeINN95612/damian-briones-portfolio" },
    ],
  },
  {
    name: "Oxify Mod",
    stack: ["Java", "Fabric"],
    links: [
      { url: "https://modrinth.com/mod/oxify" },
      { url: "https://github.com/CodeINN95612/OxifyMod" },
    ],
  },
  {
    name: "Auth Enterprise",
    stack: [
      ".NET",
      "C#",
      "Entity Framework",
      "PostgreSQL",
      "Docker",
      "Vertical Slice Architecture",
    ],
    links: [
      { url: "https://www.youtube.com/watch?v=rcRMXLr4f60" },
      { url: "https://github.com/CodeINN95612/AuthEnterprise" },
    ],
  },
];

const EDUCATION = [
  {
    school: "Universidad de las Américas (UDLA)",
    period: "2019 — 2023",
    location: "Quito, Ecuador",
  },
];

const FREELANCE = [
  {
    name: "Cyan-Bot",
    client: "Independent",
    duration: "3 months",
    stack: ["Python", "MongoDB"],
  },
  {
    name: "ULI",
    client: "Universidad de las Américas",
    duration: "1 year",
    stack: ["Python", "React", "C#", "SignalR", "Azure"],
  },
];

export const DATA = {
  PROFILE,
  SKILL_GROUPS,
  EXPERIENCE,
  PROJECTS,
  EDUCATION,
  FREELANCE,
} as const;
