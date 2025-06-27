import { PersonStandingIcon } from "lucide-react";
import { AnimatedBox } from "../AnimatedBox";
import { myInfo } from "../../../assets/data";

export const AnimatedAboutMeHeaderBox = () => {
  return (
    <AnimatedBox className="col-span-5 row-span-2 p-0">
      <div className="p-8 space-y-5 text-justify">
        <h2 className="text-4xl font-medium leading-tight flex items-center gap-3">
          <PersonStandingIcon className="size-8 text-zinc-400" /> About Me
        </h2>
        <p className="text-zinc-300">{myInfo.about_me.head}</p>
      </div>
    </AnimatedBox>
  );
};
