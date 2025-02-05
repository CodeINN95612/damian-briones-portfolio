import {
  ForwardedRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { Box } from "../Box";
import { IoHome } from "react-icons/io5";
import { AboutTab } from "../tabs/AboutTab";
import { TbUserScan } from "react-icons/tb";
import { ExperienceTab } from "../tabs/ExperienceTab";
import { MdWork } from "react-icons/md";
import { StudiesTab } from "../tabs/StudiesTab";
import { PiStudentFill } from "react-icons/pi";
import { ProjectsTab } from "../tabs/ProjectsTab";
import { FaCode } from "react-icons/fa";
import { ContactTab } from "../tabs/ContactTab";
import { RiContactsBook3Fill } from "react-icons/ri";
import { motion } from "framer-motion";
import { CvButton } from "../CVButton";

export type MenuBoxProps = {
  setTab: (tab: React.ReactNode | null) => void;
  hideOnSmall: boolean;
};
export type MenuBoxItemPosition = { top: number; opacity: number };

export function MenuBox({ setTab, hideOnSmall }: MenuBoxProps) {
  const firstItemRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<MenuBoxItemPosition>({
    top: 0,
    opacity: 0,
  });

  useEffect(() => {
    if (firstItemRef.current) {
      const OffsetTop = firstItemRef.current.offsetTop;
      setPosition({ top: OffsetTop, opacity: 1 });
    }
  }, []);

  const className =
    "relative col-span-3 row-span-5 flex flex-col items-center justify-around p-4 h-full" +
    (hideOnSmall ? "hidden" : "");

  return (
    <Box
      onMouseLeave={() => {
        if (!firstItemRef.current) return;
        const { offsetTop } = firstItemRef.current;
        const position = { top: offsetTop, opacity: 1 };
        setPosition(position);
      }}
      className={className}
    >
      <MenuBoxItem
        setPosition={setPosition}
        ref={firstItemRef}
        onClick={() => setTab(null)}
      >
        <IoHome className="size-6" />
        HOME
      </MenuBoxItem>
      <MenuBoxItem
        setPosition={setPosition}
        onClick={() => setTab(<AboutTab />)}
      >
        ABOUT
        <TbUserScan className="size-6" />
      </MenuBoxItem>
      <MenuBoxItem
        setPosition={setPosition}
        onClick={() => setTab(<ExperienceTab />)}
      >
        <MdWork className="size-6" />
        EXPERIENCE
      </MenuBoxItem>
      <MenuBoxItem
        setPosition={setPosition}
        onClick={() => setTab(<StudiesTab />)}
      >
        EDUCATION
        <PiStudentFill className="size-6" />
      </MenuBoxItem>
      <MenuBoxItem
        setPosition={setPosition}
        onClick={() => setTab(<ProjectsTab />)}
      >
        <FaCode className="size-6" />
        PROJECTS
      </MenuBoxItem>
      <MenuBoxItem
        setPosition={setPosition}
        onClick={() => setTab(<ContactTab />)}
      >
        CONTACT
        <RiContactsBook3Fill className="size-6" />
      </MenuBoxItem>
      <motion.div
        animate={position}
        transition={{
          duration: 0.05,
          ease: "easeInOut",
        }}
        className="absolute w-[90%] h-12 rounded-full bg-zinc-100"
      />
      <CvButton />
    </Box>
  );
}

type MenuBoxItemProps = {
  children: React.ReactNode;
  setPosition: (pos: MenuBoxItemPosition) => void;
  onClick: () => void;
};

const MenuBoxItem = forwardRef(function MenuBoxItem(
  { children, setPosition, onClick }: MenuBoxItemProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const internalRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => internalRef.current!);

  const handleMouseEnter = () => {
    if (!internalRef.current) return;
    setPosition({
      top: internalRef.current.offsetTop,
      opacity: 1,
    });
  };

  return (
    <motion.div
      ref={internalRef}
      whileHover={{ scale: 1.1 }}
      onMouseEnter={handleMouseEnter}
      className="relative w-full z-10 cursor-pointer p-3 px-5 uppercase text-zinc-50 mix-blend-difference"
    >
      <button
        className="font-semibold flex justify-between items-center w-full"
        onClick={() => onClick()}
      >
        {children}
      </button>
    </motion.div>
  );
});
