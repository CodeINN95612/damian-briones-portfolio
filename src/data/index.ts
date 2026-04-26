// Portfolio content. All placeholder/fictional data — easy to swap real values later.

const PROFILE = {
  name: "Damian Briones",
  title: "Senior Software Engineer",
  location: "Quito, Ecuador",
  yearsExp: 7,
  tagline:
    "Pragmatic engineer who ships. I care about clear thinking, calm code, and building things teams can maintain after I'm gone.",
  about:
    "Full-stack engineer across .NET and the JavaScript ecosystem, comfortable in cloud (AWS / Azure) and containerized environments. I work best on small teams that move fast and write things down.",
  currentlyExploring:
    "Pivoting into system design — distributed architectures, scalable backends, and the trade-offs behind them.",
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
    company: "Northwind Systems",
    period: "2023 — Present",
    location: "Remote · Quito, EC",
    summary:
      "Lead engineer on the platform team. Owns service architecture, mentors mid-level engineers, drives technical decisions across squads.",
    bullets: [
      "Migrated a monolithic .NET application to a service-oriented architecture on AWS, cutting deploy time by 70%.",
      "Mentor 4 mid-level engineers; introduced ADRs and design-review rituals.",
      "Owned the move to Docker + ECS, improving environment parity across dev/staging/prod.",
    ],
    stack: [".NET", "AWS", "Docker", "React"],
  },
  {
    role: "Software Engineer",
    company: "Atlas Logistics",
    period: "2021 — 2023",
    location: "Hybrid · Quito, EC",
    summary:
      "Built and maintained the customer-facing tracking platform serving 50k+ daily shipments across LATAM.",
    bullets: [
      "Designed the real-time tracking API on Node.js + WebSockets handling 2M events/day.",
      "Led the Vue → React migration of the customer dashboard.",
      "Reduced Azure infra spend by 32% through cost auditing and right-sizing.",
    ],
    stack: ["Node.js", "Vue", "React", "Azure"],
  },
  {
    role: "Full-Stack Developer",
    company: "Cumbre Digital",
    period: "2020 — 2021",
    location: "Quito, EC",
    summary:
      "Agency work — shipped client products across fintech, retail, and education verticals.",
    bullets: [
      "Built 6 client products end-to-end on .NET Core + React.",
      "Set up CI/CD pipelines for every project; standardized the agency's deployment workflow.",
      "Worked directly with clients on scoping, estimates, and weekly demos.",
    ],
    stack: [".NET", "React", "Docker"],
  },
  {
    role: "Junior Software Engineer",
    company: "Andina Soft",
    period: "2019 — 2020",
    location: "Quito, EC",
    summary:
      "First engineering role. Worked on internal tooling and a customer-facing billing portal.",
    bullets: [
      "Shipped the company's first React-based admin panel, replacing legacy jQuery.",
      "Wrote integration tests that caught 40+ regressions before production.",
      "Promoted within 14 months.",
    ],
    stack: [".NET", "React", "JavaScript"],
  },
  {
    role: "Software Engineering Intern",
    company: "Quito Code Lab",
    period: "Summer 2018",
    location: "Quito, EC",
    summary: "Internship building internal dashboards for a local consultancy.",
    bullets: [
      "Built a reporting dashboard in Vue consumed daily by the ops team.",
      "First exposure to code review and pull-request workflows.",
    ],
    stack: ["Vue", "Node.js"],
  },
  {
    role: "Freelance Developer",
    company: "Self-employed",
    period: "2017 — 2019",
    location: "Remote",
    summary:
      "Side gigs while studying. Small business sites, scripts, and one e-commerce build.",
    bullets: [
      "Delivered 8+ small projects end-to-end, from scoping to deploy.",
      "Learned the value of writing things down for clients who don't speak code.",
    ],
    stack: ["JavaScript", "Node.js", ".NET"],
  },
];

const PROJECTS = [
  {
    name: "Pulse",
    blurb:
      "Open-source uptime monitor with regional probing. Built to teach myself distributed scheduling and time-series storage.",
    role: "Solo project",
    stack: ["Node.js", "Docker", "AWS"],
    links: [
      { label: "GitHub", url: "https://github.com/damianbriones/pulse" },
      { label: "Live", url: "https://pulse.example.com" },
    ],
  },
  {
    name: "Ledgerly",
    blurb:
      "A small-business invoicing tool. Tiny full-stack app, but the architecture is the lesson — clean domain, swap-anything infrastructure.",
    role: "Solo project",
    stack: [".NET", "React", "Azure"],
    links: [
      { label: "GitHub", url: "https://github.com/damianbriones/ledgerly" },
      { label: "Live", url: "https://ledgerly.example.com" },
    ],
  },
  {
    name: "MapMesh",
    blurb:
      "Visualizer for system architecture diagrams as living, queryable graphs. A toy that became a hobby.",
    role: "Solo project",
    stack: ["Vue", "Node.js", "Docker"],
    links: [
      { label: "GitHub", url: "https://github.com/damianbriones/mapmesh" },
    ],
  },
  {
    name: "Quitogram",
    blurb:
      "Photo-journal of Quito with friends. Side project, but a real production app with auth, storage, and CDN.",
    role: "Co-creator (2 people)",
    stack: ["React", "Node.js", "AWS"],
    links: [
      { label: "GitHub", url: "https://github.com/damianbriones/quitogram" },
      { label: "Live", url: "https://quitogram.example.com" },
    ],
  },
  {
    name: "Tinybus",
    blurb:
      "A self-hosted message bus for hobby projects. Tiny footprint, pluggable transports, fun to write.",
    role: "Solo project",
    stack: [".NET", "Docker"],
    links: [
      { label: "GitHub", url: "https://github.com/damianbriones/tinybus" },
    ],
  },
  {
    name: "Andes CLI",
    blurb:
      "Command-line scaffolding tool I wrote to bootstrap my .NET + React side projects in one command.",
    role: "Solo project",
    stack: ["Node.js"],
    links: [
      { label: "GitHub", url: "https://github.com/damianbriones/andes-cli" },
    ],
  },
];

const EDUCATION = [
  {
    degree: "Bachelor of Software Engineering",
    school: "Universidad de las Américas (UDLA)",
    period: "2015 — 2019",
    location: "Quito, Ecuador",
    notes:
      "Capstone on custom AI chatbots for prospective students in my university.",
  },
];

const HOBBIES = [
  {
    label: "Reading",
    note: "Would read almost every book I can get my hands on.",
  },
  {
    label: "Programming",
    note: "Yes, I enjoy it outside of work, even on weekends.",
  },
  {
    label: "Minecraft",
    note: "Not good with color gradients, but I make a mean redstone contraption.",
  },
  { label: "Gym", note: "Keeps the head clear." },
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
  },

  // About Section
  about: {
    eyebrow: "01 · About",
    subtitle: "The short version, written for humans — not for resume parsers.",
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
  PROJECTS,
  EDUCATION,
  HOBBIES,
  UI_CONTENT,
} as const;
