import type { Education } from "../../lib/types";
import { EducationItem } from "../common/EducationItem";
import { AnimatedBox } from "./AnimatedBox";

export type AnimatedEducationBoxProps = {
  education: Education;
};

export const AnimatedEducationBox = ({
  education,
}: AnimatedEducationBoxProps) => {
  return (
    <AnimatedBox className="col-span-5 row-span-4 p-4">
      <EducationItem education={education} />
    </AnimatedBox>
  );
};
