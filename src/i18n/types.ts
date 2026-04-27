export type Lang = "en" | "es";

export type Translations = {
  langToggle: string;
  navMenuAriaLabel: string;

  nav: {
    about: string;
    skills: string;
    experience: string;
    projects: string;
    education: string;
    contact: string;
  };

  hero: {
    eyebrow: string;
    downloadCV: string;
    currentlyFocused: string;
    metaLocation: string;
    metaExperience: string;
    metaAvailability: string;
    metaLanguages: string;
    openToOpportunities: string;
    years: string;
    portraitAlt: string;
    langIndicator: string;
    copied: string;
  };

  about: {
    eyebrow: string;
    subtitle: string;
    aboutHeading: string;
    hobbiesHeading: string;
  };

  skills: {
    eyebrow: string;
    subtitle: string;
    groups: { label: string }[];
  };

  experience: {
    eyebrow: string;
    subtitle: string;
    at: string;
    showLess: string;
    showMore: (n: number) => string;
    entries: { summary: string; bullets: string[] }[];
  };

  projects: {
    eyebrow: string;
    subtitle: string;
    showLess: string;
    showMore: (n: number) => string;
    entries: {
      blurb: string;
      role: string;
      links: { label: string }[];
    }[];
  };

  education: {
    eyebrow: string;
    subtitle: string;
    entries: { degree: string; notes: string }[];
  };

  contact: {
    eyebrow: string;
    subtitle: string;
    heading: string;
    leadText: string;
    copyButton: string;
    copiedButton: string;
    labels: {
      email: string;
      phone: string;
      linkedin: string;
      github: string;
    };
  };

  footer: {
    builtYear: string;
  };

  profile: {
    title: string;
    tagline: string;
    about: string;
    currentlyExploring: string;
    spokenLanguages: { name: string; level: string }[];
  };

  hobbies: { label: string; note: string }[];

  freelance: { blurb: string }[];
};
