import type {
  Certification,
  Contact,
  Education,
  Freelance,
  Hobby,
  Project,
  Skill,
  Stat,
  WorkExperience,
} from "../lib/types";

export const profile = {
  name: "Damián Briones",
  firstName: "Damián",
  initials: "DB",
  title: "Software Engineer",
  /** File reference shown on the dossier — start year as the record id. */
  ref: "SWE-2019",
  image: "/personal.jpg",
  resume: "/CV.pdf",
  /** Hero one-liner: specific and true, not a slogan. */
  tagline:
    "I'm a software engineer focused on system design and software architecture — doing more than just writing code.",
  /** Short profile paragraph for §01. */
  bio: "Software engineer with about seven years in production, backend-deep and moving fullstack. I like untangling tangled systems, refactoring legacy code into something maintainable, and shipping software that holds up.",
  availability: "Open to short freelance projects",
  closing:
    "I'm happy where I am — but I take on short freelance projects on the side. Got something that needs a backend-leaning engineer who can also own the frontend? Let's talk.",
} as const;

/** §01 vitals — rendered as dossier fields, not big-number cards. */
export const stats: Stat[] = [
  { label: "Experience", value: "~7 yrs in production" },
  { label: "Based in", value: "Quito, EC · UTC−5" },
  { label: "Open to", value: "Short freelance" },
  { label: "Languages", value: "ES native · EN fluent" },
];

export const hobbies: Hobby[] = [
  { name: "Gaming", icon: "gaming" },
  { name: "Reading", icon: "reading" },
  { name: "Gym", icon: "gym" },
];

/** §02 stack — ordered by how central each is to my work. */
export const skills: Skill[] = [
  {
    name: ".NET / C#",
    role: "Backend & APIs",
    icon: "dotnet",
    tint: "text-violet-400",
  },
  { name: "Vue", role: "Web UI", icon: "vue", tint: "text-emerald-400" },
  { name: "React", role: "Web UI", icon: "react", tint: "text-sky-400" },
  { name: "AWS", role: "Cloud", icon: "aws", tint: "text-orange-400" },
  {
    name: "Azure",
    role: "Cloud & DevOps",
    icon: "azure",
    tint: "text-cyan-400",
  },
  { name: "Docker", role: "Containers", icon: "docker", tint: "text-blue-400" },
  {
    name: "OpenTofu",
    role: "Infra as code",
    icon: "opentofu",
    tint: "text-amber-400",
  },
  { name: "SQL", role: "Data", icon: "sql", tint: "text-indigo-400" },
  {
    name: "Agentic Dev",
    role: "AI-assisted builds",
    icon: "agentic",
    tint: "text-fuchsia-400",
  },
];

/** §03 work record — newest first; dates carry the order. */
export const work: WorkExperience[] = [
  {
    title: "Software Engineer",
    company: "MikMak (by Spins)",
    location: "Remote · US",
    dateRange: "2025 — Present",
    description:
      "Maintain marketing and commerce software, and lead internal initiatives across data, pipelines, migrations, and moves to newer technology. The work leans into system design, software architecture, and infrastructure, collaborating with international teams in English.",
    skills: [".NET", "Vue", "AWS", "OpenTofu", "System design"],
    current: true,
  },
  {
    title: "Senior Software Engineer",
    company: "Logiztik Alliance Group",
    location: "Quito, Ecuador",
    dateRange: "2023 — 2025",
    description:
      "Built and maintained the company's logistics platform: refactoring legacy code, shipping new features, and breaking the monolith into microservices. Led the team as Scrum master.",
    skills: ["C#", ".NET", "SQL", "Docker", "Azure DevOps", "Scrum"],
  },
  {
    title: "Junior Software Engineer",
    company: "CloudStudio",
    location: "Quito, Ecuador",
    dateRange: "2019 — 2023",
    description:
      "Developed and maintained a financial system used by banks nationwide. Refactored legacy code, handled customer support, and trained new developers.",
    skills: ["C#", ".NET", "SQL", "Silverlight"],
  },
];

export const freelance: Freelance[] = [
  {
    project: "ULI",
    client: "Universidad de las Américas",
    description:
      "AI customer-service chatbot tuned with the institution's own information, with a real-time chat interface.",
    duration: "1 year",
    skills: ["Python", "React", "C#", "SignalR", "Azure"],
  },
  {
    project: "Cyan-Bot",
    client: "Independent",
    description:
      "Discord bot that manages payments and roles for a translation community.",
    duration: "3 months",
    skills: ["Python", "MongoDB"],
  },
];

export const education: Education[] = [
  {
    degreeTitle: "Bachelor in Software Engineering",
    institution: "Universidad de las Américas",
    location: "Quito, Ecuador",
    dateRange: "2019 — 2023",
    topics: [
      "Advanced programming",
      "Software engineering & design",
      "Web, mobile & desktop development",
      "Game development",
      "Networks & operating systems",
    ],
    current: false,
  },
];

/** §04 case files — personal & open-source builds. */
export const projects: Project[] = [
  {
    title: "Auth Enterprise",
    description:
      "Reference .NET auth service from my YouTube series — JWT, users, roles and permissions, built with vertical slice architecture.",
    technologies: [".NET", "C#", "Entity Framework", "PostgreSQL", "Docker"],
    status: "shipped",
    liveLink: "https://www.youtube.com/watch?v=rcRMXLr4f60",
    liveLabel: "Watch",
    githubLink: "https://github.com/CodeINN95612/AuthEnterprise",
    image: "/projects/auth-enterprise.jpg",
  },
  {
    title: "Oxify Mod",
    description:
      "Minecraft mod that adds an oxifier item to the game. Published on Modrinth.",
    technologies: ["Java", "Fabric"],
    status: "shipped",
    liveLink: "https://modrinth.com/mod/oxify",
    liveLabel: "Mod page",
    githubLink: "https://github.com/CodeINN95612/OxifyMod",
    image: "/projects/oxify.jpg",
  },
  {
    title: "We Like Sushi",
    description:
      "A blog and CMS to rate sushi spots with my girlfriend, with authentication. Currently in development.",
    technologies: ["SvelteKit", "Tailwind CSS", "shadcn", "Supabase"],
    status: "in-dev",
    githubLink: "https://github.com/CodeINN95612/WeLikeSushi",
    image: "/projects/we-like-sushi.jpg",
  },
];

/** §05 credentials. */
export const certifications: Certification[] = [
  {
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "2024",
    description:
      "Foundational knowledge of cloud services and how they're delivered on Microsoft Azure.",
    credentialId: "E795636135DDD8FD",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/DamianBriones-9572/E795636135DDD8FD?sharingId=5BCEED54F209B1C6",
  },
  {
    title: "Scrum Fundamentals Certified",
    issuer: "ScrumStudy",
    date: "2024",
    description: "Demonstrates working knowledge of Scrum fundamentals.",
  },
];

/** §06 contact. */
export const contact: Contact = {
  email: "work@damianbriones.dev",
  phone: "+593 98 762 1334",
  whatsapp: "https://wa.me/593987621334",
  linkedin: "https://www.linkedin.com/in/damian-briones-flachier/",
  github: "https://www.github.com/CodeINN95612",
  location: "Quito, Ecuador",
};
