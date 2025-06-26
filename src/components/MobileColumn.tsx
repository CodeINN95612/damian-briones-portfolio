import { motion } from "framer-motion";
import { AnimatedHeaderBox } from "./animated-ui/AnimatedHeaderBox";
import { AnimatedHamburgerButton } from "./animated-ui/AnimatedHamburgerButton";
import { useState } from "react";
import { AnimatedModal } from "./animated-ui/AnimatedModal";

export const MobileColumn = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <motion.div className="z-10 max-w-md md:hidden flex flex-col gap-4 p-4 relative">
      <div className="flex justify-end-safe">
        <AnimatedHamburgerButton
          isOpen={isMenuVisible}
          setIsOpen={setIsMenuVisible}
        />
      </div>
      <AnimatedHeaderBox />
      <AnimatedModal setVisible={setIsMenuVisible} visible={isMenuVisible}>
        test
      </AnimatedModal>
    </motion.div>
  );
};
