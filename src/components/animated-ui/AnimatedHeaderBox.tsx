import { AnimatedContactHeaderBox } from "./header/AnimatedContactHeaderBox";
import { AnimatedAboutMeHeaderBox } from "./header/AnimatedAboutMeHeaderBox";
import { AnimatedExperienceHeaderBox } from "./header/AnimatedExperienceHeaderBox";
import { AnimatedTitleHeaderBox } from "./header/AnimatedTitleHeaderBox";
import { useSectionContext } from "../../hooks/useSectionContext";
import { AnimatedEducationHeaderBox } from "./header/AnimatedEducationHeaderBox";

export type ContactOption = {
  label: string;
  icon: React.ReactNode;
  value: string;
  link: string;
};

export type AnimatedHeaderBoxProps = {
  contactOptions: ContactOption[];
};

export const AnimatedHeaderBox = ({
  contactOptions,
}: AnimatedHeaderBoxProps) => {
  const { activeSection } = useSectionContext();

  if (activeSection === "contact") {
    return <AnimatedContactHeaderBox contactOptions={contactOptions} />;
  }

  if (activeSection === "about") {
    return <AnimatedAboutMeHeaderBox />;
  }

  if (activeSection === "experience") {
    return <AnimatedExperienceHeaderBox />;
  }

  if (activeSection === "education") {
    return <AnimatedEducationHeaderBox />;
  }

  return <AnimatedTitleHeaderBox />;
};
