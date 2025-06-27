import { motion, type HTMLMotionProps } from "framer-motion";
import { AnimatedBox } from "./AnimatedBox";
import { myInfo } from "../../assets/data";
import { twMerge } from "tailwind-merge";

export const AnimatedSkillsBox = () => {
  return (
    <AnimatedBox className="col-span-5 row-span-2 grid grid-cols-4 gap-4">
      <div className="col-span-2 flex items-center justify-center">
        <motion.h2 whileHover={{ scale: 1.1 }} className="font-bold text-xl">
          TECK STACK
        </motion.h2>
      </div>
      {myInfo.skills.map((skill) => (
        <SkillItem key={skill.name} className={skill.className}>
          {skill.children}
        </SkillItem>
      ))}
    </AnimatedBox>
  );
};

type StackItemProps = { className?: string } & HTMLMotionProps<"div">;

const SkillItem = ({ className, ...rest }: StackItemProps) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        rotate: Math.random() > 0.5 ? 12 : -12,
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
