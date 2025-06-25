import { motion } from "framer-motion";
import { AnimatedBox } from "./AnimatedBox";
import { useState } from "react";
import { useSectionContext } from "../../hooks/useSectionContext";
import { IoHome } from "react-icons/io5";
import { TbUserScan } from "react-icons/tb";
import { MdWork } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { FaCode } from "react-icons/fa";
import { RiContactsBook3Fill } from "react-icons/ri";
import { BiDownload } from "react-icons/bi";

export const AnimatedMenuBox = () => {
  const { setActiveSection } = useSectionContext();

  const menuItems = [
    {
      label: "Home",
      icon: <IoHome />,
      onClick: () => {
        setActiveSection("home");
      },
      flipped: false,
    },
    {
      label: "About",
      icon: <TbUserScan />,
      onClick: () => {
        setActiveSection("about");
      },
      flipped: true,
    },
    {
      label: "Experience",
      icon: <MdWork />,
      onClick: () => {
        setActiveSection("experience");
      },
      flipped: false,
    },
    {
      label: "Education",
      icon: <PiStudentFill />,
      onClick: () => {
        setActiveSection("education");
      },
      flipped: true,
    },
    {
      label: "Projects",
      icon: <FaCode />,
      onClick: () => {
        setActiveSection("projects");
      },
      flipped: false,
    },
    {
      label: "Contact",
      icon: <RiContactsBook3Fill />,
      onClick: () => {
        setActiveSection("contact");
      },
      flipped: true,
    },
  ];

  return (
    <AnimatedBox className="relative col-span-3 row-span-5 flex flex-col items-center justify-around p-4 h-full">
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
      <CvButton />
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

const CvButton = () => {
  return (
    <motion.div
      className="relative inline-block"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-zinc-400 to-teal-400 rounded-lg"></div>
      <motion.a
        href="/CV.pdf"
        download
        className="relative flex items-center gap-2 bg-zinc-800 font-semibold py-2 px-4 rounded-md transition-colors duration-200 m-1"
        whileHover={{
          boxShadow: "0px 0px 12px rgb(255,255,255)",
        }}
      >
        <motion.span
          animate={{ y: [0, -2, 1, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          <BiDownload className="size-5" />
        </motion.span>
        <motion.span
          animate={{ y: [0, 2, -1, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
        >
          Download CV
        </motion.span>
      </motion.a>
    </motion.div>
  );
};
