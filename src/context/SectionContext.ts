import { createContext } from "react";

export type Section =
  | "home"
  | "about"
  | "projects"
  | "contact"
  | "experience"
  | "education";

export type SectionContextType = {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
};

export const SectionContext = createContext<SectionContextType>({
  activeSection: "home",
  setActiveSection: () => {},
});
