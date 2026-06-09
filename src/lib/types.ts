// Icon ids resolved to Tabler components in src/lib/icons.ts — keeps data JSX-free.
export type IconId =
  | "dotnet"
  | "react"
  | "docker"
  | "vue"
  | "azure"
  | "aws"
  | "opentofu"
  | "sql"
  | "agentic"
  | "gaming"
  | "reading"
  | "gym"
  | "email"
  | "phone"
  | "whatsapp"
  | "linkedin"
  | "github"
  | "location";

export type Skill = {
  /** Display name, e.g. ".NET" */
  name: string;
  /** What it's used for — small caption in the catalog cell. */
  role: string;
  icon: IconId;
  /** Tailwind text-color class for the brand tint, e.g. "text-sky-400". */
  tint: string;
};

export type Hobby = {
  name: string;
  icon: IconId;
};

export type Stat = {
  /** Field label, e.g. "Experience". */
  label: string;
  /** Field value, e.g. "6 yrs". */
  value: string;
};

export type WorkExperience = {
  title: string;
  company: string;
  location: string;
  dateRange: string;
  description: string;
  skills: string[];
  current?: boolean;
};

export type Freelance = {
  project: string;
  client: string;
  description: string;
  duration: string;
  skills: string[];
};

export type Education = {
  degreeTitle: string;
  institution: string;
  location: string;
  dateRange: string;
  topics: string[];
  current?: boolean;
};

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  status: "shipped" | "in-dev";
  /** Live demo / published link (optional). */
  liveLink?: string;
  /** Label for the live link, e.g. "Live", "Watch", "Mod page". */
  liveLabel?: string;
  githubLink?: string;
  image?: string;
};

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  description: string;
  credentialId?: string;
  url?: string;
};

export type Contact = {
  email: string;
  phone: string;
  whatsapp: string;
  linkedin: string;
  github: string;
  location: string;
};
