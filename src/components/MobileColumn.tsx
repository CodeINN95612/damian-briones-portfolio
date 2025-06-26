import { motion } from "framer-motion";
import { AnimatedHeaderBox } from "./animated-ui/AnimatedHeaderBox";
import { AnimatedHamburgerButton } from "./animated-ui/AnimatedHamburgerButton";
import { useState } from "react";
import { AnimatedModal } from "./animated-ui/AnimatedModal";
import { AnimatedMenuBox } from "./animated-ui/AnimatedMenuBox";
import { AnimatedImageBox } from "./animated-ui/AnimatedImageBox";
import { AnimatedSocialsBox } from "./animated-ui/AnimatedSocialsBox";

export const MobileColumn = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <motion.div className="z-10 max-w-md md:hidden flex flex-col gap-4 p-4">
      <div className="flex justify-end-safe">
        <AnimatedHamburgerButton setIsOpen={setIsMenuVisible} />
      </div>
      <AnimatedHeaderBox />
      <AnimatedImageBox />
      <div className="flex w-full gap-4">
        <AnimatedSocialsBox />
      </div>
      <AnimatedModal setVisible={setIsMenuVisible} visible={isMenuVisible}>
        <AnimatedMenuBox />
      </AnimatedModal>
    </motion.div>
  );
};
