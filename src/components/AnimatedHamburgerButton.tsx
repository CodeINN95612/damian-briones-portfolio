import { motion, MotionConfig } from "framer-motion";

export type AnimatedHamburgerButtonProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const variants = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["20%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "20%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["80%", "50%", "50%"],
      display: ["block", "none", "none"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "80%"],
      left: "50%",
      display: ["none", "none", "block"],
    },
  },
};

export function AnimatedHamburgerButton({
  isMenuOpen,
  setIsMenuOpen,
}: AnimatedHamburgerButtonProps) {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={isMenuOpen ? "open" : "closed"}
        onClick={() => setIsMenuOpen((pv) => !pv)}
        className="relative size-20"
      >
        <motion.span
          variants={variants.top}
          className="absolute h-2 w-[90%] bg-zinc-100"
          style={{
            left: "50%",
            top: "20%",
            x: "-50%",
            y: "-50%",
          }}
        />
        <motion.span
          variants={variants.middle}
          className="absolute h-2 w-[90%] bg-zinc-100"
          style={{
            left: "50%",
            top: "50%",
            x: "-50%",
            y: "-50%",
          }}
        />
        <motion.span
          variants={variants.bottom}
          className="absolute h-2 w-[45%] bg-zinc-100"
          style={{
            left: "50%",
            top: "80%",
            x: "0%",
            y: "-50%",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
}
