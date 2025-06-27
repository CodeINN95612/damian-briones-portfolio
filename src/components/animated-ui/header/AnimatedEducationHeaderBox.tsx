import { GraduationCap } from "lucide-react";
import { AnimatedBox } from "../AnimatedBox";

//TODO: Get text from info
export const AnimatedEducationHeaderBox = () => {
  return (
    <AnimatedBox className="col-span-5 row-span-2 p-0">
      <div className="p-8 space-y-5">
        <h2 className="text-4xl font-medium leading-tight flex items-center gap-3">
          <GraduationCap className="size-8 text-zinc-400" /> My Education
        </h2>
        <p className="text-zinc-300">
          My educational background has provided me with a solid foundation of
          software engineering principles. I have completed my Bachelor degree
          and am in seek of a Masters.
        </p>
      </div>
    </AnimatedBox>
  );
};
