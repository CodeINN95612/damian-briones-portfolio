import { twMerge } from "tailwind-merge";
import type { Experience } from "../../common/types";
import { AnimatedBox } from "./AnimatedBox";
import { ExperienceItem } from "./common/ExperienceItem";

export type AnimatedExperienceBoxProps = {
  experience: Experience;
  className?: string;
  sm?: boolean;
};

export const AnimatedExperienceBox = ({
  experience,
  className,
  sm,
}: AnimatedExperienceBoxProps) => {
  return (
    <AnimatedBox
      className={twMerge("col-span-5 row-span-4", className, sm ? "p-4" : "")}
    >
      <ExperienceItem experience={experience} sm={sm} />
    </AnimatedBox>
  );
};
