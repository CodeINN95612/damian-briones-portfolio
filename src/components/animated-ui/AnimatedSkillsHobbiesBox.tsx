import { SectionContext } from "../../context/SectionContext";
import { useContext } from "react";
import { AnimatedHobbiesBox } from "./AnimatedHobbiesBox";
import { AnimatedSkillsBox } from "./AnimatedSkillsBox";

export const AnimatedSkillsHobbiesBox = () => {
  const { activeSection } = useContext(SectionContext);

  if (activeSection === "about") {
    return <AnimatedHobbiesBox />;
  }

  return <AnimatedSkillsBox />;
};
