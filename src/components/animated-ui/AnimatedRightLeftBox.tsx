import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedBox } from "./AnimatedBox";

export type AnimatedRightLeftBoxProps = {
  onLeftClick?: () => void;
  onRightClick?: () => void;
};

export const AnimatedRightLeftBox = ({
  onLeftClick,
  onRightClick,
}: AnimatedRightLeftBoxProps) => {
  return (
    <AnimatedBox className="col-span-3 row-span-1 flex p-0 w-full">
      <button
        className="flex-1 flex justify-center items-center rounded-l hover:bg-zinc-700 transition-colors cursor-pointer"
        onClick={onLeftClick}
      >
        <ChevronLeft className="size-8" />
      </button>
      <button
        className="flex-1 flex justify-center items-center rounded-r hover:bg-zinc-700 transition-colors cursor-pointer"
        onClick={onRightClick}
      >
        <ChevronRight className="size-8" />
      </button>
    </AnimatedBox>
  );
};
