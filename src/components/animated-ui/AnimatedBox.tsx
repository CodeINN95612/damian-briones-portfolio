import {
  AnimatePresence,
  type HTMLMotionProps,
  motion,
  type Variants,
} from "framer-motion";
import { useContext } from "react";
import { twMerge } from "tailwind-merge";
import { SectionContext } from "../../context/SectionContext";

export type AnimatedBoxProps = {
  className?: string;
  sectionAnimated?: boolean;
  animatedClassName?: string;
} & HTMLMotionProps<"div">;

export function AnimatedBox({
  className,
  sectionAnimated,
  animatedClassName,
  children,
  ...rest
}: AnimatedBoxProps) {
  const { activeSection } = useContext(SectionContext);

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
    >
      {sectionAnimated ? (
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={twMerge("h-full w-full", animatedClassName)}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      ) : (
        children
      )}
    </motion.div>
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
