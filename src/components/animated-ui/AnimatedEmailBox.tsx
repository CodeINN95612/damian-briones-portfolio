import { MdAlternateEmail } from "react-icons/md";
import { useSectionContext } from "../../hooks/useSectionContext";
import { AnimatedBox } from "./AnimatedBox";
import { myInfo } from "../../assets/data";

export const AnimatedEmailBox = () => {
  const { activeSection } = useSectionContext();

  const excludedSections = ["experience", "education"];
  if (excludedSections.includes(activeSection)) {
    return null;
  }

  return (
    <AnimatedBox className="col-span-5 row-span-1 flex items-center justify-between p-2 px-6">
      <MdAlternateEmail className="size-6 text-teal-300" />
      <p className="select-all">{myInfo.contact.email}</p>
    </AnimatedBox>
  );
};
