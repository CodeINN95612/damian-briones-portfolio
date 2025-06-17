import { type HTMLMotionProps, motion, type Variants } from "framer-motion";
import { twMerge } from "tailwind-merge";

export type AnimatedBoxProps = { className?: string } & HTMLMotionProps<"div">;

export function AnimatedBox({ className, ...rest }: AnimatedBoxProps) {
  return (
    <motion.div
      variants={boxVariants}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "bg-zinc-800 border border-zinc-700 rounded-lg p-6 col-span-1",
        className
      )}
      {...rest}
    />
  );
}

const boxVariants: Variants = {
  initial: {
    scale: 0.5,
    y: 50,
    opacity: 0,
  },
  animate: {
    scale: 1,
    y: 0,
    opacity: 1,
  },
};
