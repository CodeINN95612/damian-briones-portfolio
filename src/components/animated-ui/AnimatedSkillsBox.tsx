import { motion, type HTMLMotionProps } from "framer-motion";
import { AnimatedBox } from "./AnimatedBox";
import { myInfo } from "../../assets/data";
import { twMerge } from "tailwind-merge";

const rotations = myInfo.skills.map(() => (Math.random() > 0.5 ? 12 : -12));

export const AnimatedSkillsBox = () => {
  return (
    <AnimatedBox className="col-span-5 row-span-2 grid grid-cols-4 gap-4">
      <div className="col-span-2 flex items-center justify-center">
        <motion.h2 whileHover={{ scale: 1.1 }} className="font-bold text-xl">
          TECK STACK
        </motion.h2>
      </div>
      {myInfo.skills.map((skill, i) => (
        <SkillItem
          key={skill.name}
          className={skill.className}
          rotation={rotations[i]}
        >
          {skill.children}
        </SkillItem>
      ))}
    </AnimatedBox>
  );
};

type StackItemProps = {
  className?: string;
  rotation: number;
} & HTMLMotionProps<"div">;

const SkillItem = ({ className, rotation, ...rest }: StackItemProps) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        rotate: rotation,
        y: -10,
      }}
      className={twMerge(
        "col-span-1 rounded size-full aspect-square flex items-center justify-center bg-zinc-400",
        className
      )}
      {...rest}
    />
  );
};
