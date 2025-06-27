import { motion } from "framer-motion";
import { AnimatedBox } from "./AnimatedBox";
import { Menu } from "lucide-react";

export type AnimatedHamburgerButtonProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function AnimatedHamburgerButton({
  setIsOpen,
}: AnimatedHamburgerButtonProps) {
  return (
    <AnimatedBox className="p-0">
      <motion.button
        onClick={() => setIsOpen((pv) => !pv)}
        className="p-2 m-auto flex items-center justify-center"
      >
        <Menu className="size-10" />
      </motion.button>
    </AnimatedBox>
  );
}
