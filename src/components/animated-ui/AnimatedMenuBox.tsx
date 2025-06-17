import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { AnimatedBox } from "./AnimatedBox";
import { useState } from "react";

export type Props = {
  hidden: boolean;
  cvButton: React.ReactNode;
  menuItems: {
    label: string;
    icon: React.ReactNode;
    flipped: boolean;
    onClick: () => void;
  }[];
};

export const AnimatedMenuBox = ({ hidden, menuItems, cvButton }: Props) => {
  const className = twMerge(
    "relative col-span-3 row-span-5 flex flex-col items-center justify-around p-4 h-full",
    hidden ? "hidden" : ""
  );

  return (
    <AnimatedBox className={className}>
      {menuItems.map((item, index) => (
        <AnimatedMenuBoxItem key={index} onClick={item.onClick}>
          {item.flipped ? (
            <>
              {item.label}
              {item.icon}
            </>
          ) : (
            <>
              {item.icon}
              {item.label}
            </>
          )}
        </AnimatedMenuBoxItem>
      ))}
      {cvButton}
    </AnimatedBox>
  );
};

type AnimatedMenuBoxItemProps = {
  children: React.ReactNode;
  onClick: () => void;
};

const AnimatedMenuBoxItem = ({
  children,
  onClick,
}: AnimatedMenuBoxItemProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      onClick={onClick}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="text-center w-full cursor-pointer px-4 py-3 uppercase text-zinc-50 font-semibold relative "
    >
      <motion.span
        animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0 }}
        transition={{ duration: 0.1 }}
        className="absolute inset-0 w-full h-full rounded-full bg-zinc-200 pointer-events-none"
      />
      <motion.div
        animate={{ scale: hovered ? 1.1 : 1 }}
        transition={{ duration: 0.1 }}
        className="h-full mix-blend-difference relative z-10 flex justify-between items-center w-full px-4"
      >
        {children}
      </motion.div>
    </motion.button>
  );
};
