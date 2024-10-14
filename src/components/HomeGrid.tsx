import { HTMLMotionProps, motion, Variants } from "framer-motion";
import { MapPin } from "lucide-react";
import {
  ForwardedRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { FaCode, FaLanguage, FaRedo } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { IoHome } from "react-icons/io5";
import { MdAlternateEmail, MdWork } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { RiContactsBook3Fill } from "react-icons/ri";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { TbUserScan } from "react-icons/tb";
import { twMerge } from "tailwind-merge";
import {
  AnimatedHamburgerButton,
  AnimatedHamburgerButtonProps,
} from "./AnimatedHamburgerButton";
import { AboutTab } from "./tabs/AboutTab";
import { ExperienceTab } from "./tabs/ExperienceTab";
import { StudiesTab } from "./tabs/StudiesTab";
import { ProjectsTab } from "./tabs/ProjectsTab";
import { ContactTab } from "./tabs/ContactTab";
import { myInfo } from "../data/my_info";
import { CvButton } from "./CVButton";

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

export type HomeGridProps = {
  setTab: (tab: React.ReactNode | null) => void;
};

export function HomeGrid({ setTab }: HomeGridProps) {
  const [key, setKey] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      setKey((p) => (p > 1000 ? 0 : p + 1));
    });

    resizeObserver.observe(document.body);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <motion.section
      key={key}
      initial="initial"
      animate="animate"
      transition={{
        staggerChildren: 0.1,
      }}
      className="grid grid-cols-6 gap-4 grid-flow-dense z-[5] md:grid-cols-12 md:max-w-4xl "
    >
      <EmptyBox />
      <BurgerBox isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <HeaderBox setTab={setTab} />
      <ImageBox />
      <MenuBox setTab={setTab} />
      <StackBox />
      <LanguagesBox />
      <ReloadBox
        onClick={() => {
          setKey((p) => p + 1);
        }}
      />
      <LinkedInBox />
      <GithubBox />
      <EmailBox />
      <LocationBox />
    </motion.section>
  );
}

function EmptyBox() {
  return (
    <Box className="col-span-4 sm:col-span-5 row-span-1 bg-transparent border-none md:hidden" />
  );
}

function BurgerBox({
  isMenuOpen,
  setIsMenuOpen,
}: AnimatedHamburgerButtonProps) {
  return (
    <Box className="col-span-2 sm:col-span-1 row-span-1 flex items-center justify-center p-0 aspect-square md:hidden">
      <AnimatedHamburgerButton
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </Box>
  );
}

function HeaderBox({
  setTab,
}: {
  setTab: (tab: React.ReactNode | null) => void;
}) {
  return (
    <Box className="col-span-6 md:col-span-5 row-span-2">
      <h1 className=" text-4xl font-medium  mt-5 leading-tight">
        Hi, I'm {myInfo.alias}.
      </h1>
      <p className="text-4xl font-medium leading-tight text-zinc-400 mb-10">
        I'm a {myInfo.title}.
      </p>
      <button
        onClick={() => setTab(<ContactTab />)}
        className="flex items-center gap-1 text-teal-300 hover:underline"
      >
        Contact me <FiArrowRight />
      </button>
    </Box>
  );
}

function ImageBox() {
  return (
    <Box className="col-span-4 row-span-4 p-1 min-w-12">
      <img
        src={myInfo.image}
        alt="A photo of me"
        className="rounded-md w-full h-full"
      />
    </Box>
  );
}

type MenuBoxProps = {
  setTab: (tab: React.ReactNode | null) => void;
};
type MenyBoxItemPosition = { top: number; opacity: number };

function MenuBox({ setTab }: MenuBoxProps) {
  const firstItemRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<MenyBoxItemPosition>({
    top: 0,
    opacity: 0,
  });

  useEffect(() => {
    if (firstItemRef.current) {
      const OffsetTop = firstItemRef.current.offsetTop;
      setPosition({ top: OffsetTop, opacity: 1 });
    }
  }, []);

  return (
    <Box
      onMouseLeave={() => {
        if (!firstItemRef.current) return;
        const { offsetTop } = firstItemRef.current;
        const position = { top: offsetTop, opacity: 1 };
        setPosition(position);
      }}
      className="relative col-span-3 row-span-5 hidden md:flex flex-col items-center justify-around p-4"
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
        className="absolute w-[90%] h-12 rounded-full bg-zinc-100"
      />
      <CvButton />
    </Box>
  );
}

type MenuBoxItemProps = {
  children: React.ReactNode;
  setPosition: (pos: MenyBoxItemPosition) => void;
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

function GithubBox() {
  return (
    <Box className="col-span-2 row-span-2 bg-gray-700 p-0">
      <motion.a
        layout
        whileHover={{ y: -15, scale: 1.2 }}
        href={myInfo.contact.github}
        className="size-full flex items-center justify-center p-4"
      >
        <SiGithub className="size-10" />
      </motion.a>
    </Box>
  );
}

function LinkedInBox() {
  return (
    <Box className="col-span-2 row-span-2 bg-sky-700 p-0">
      <motion.a
        whileHover={{ y: -15, scale: 1.2 }}
        href={myInfo.contact.linkedin}
        className="size-full flex items-center justify-center p-4"
      >
        <SiLinkedin className="size-10" />
      </motion.a>
    </Box>
  );
}

function LocationBox() {
  return (
    <Box className="col-span-3 row-span-1 flex items-center justify-between p-2 px-3">
      <MapPin className="size-6 text-teal-300" />
      <p>{myInfo.contact.location}</p>
    </Box>
  );
}

function LanguagesBox() {
  return (
    <Box className="col-span-6 md:col-span-4 row-span-1 flex items-center justify-between p-2 px-3">
      <p>English</p> <FaLanguage className="size-10 text-teal-300" />{" "}
      <p>Spanish</p>
    </Box>
  );
}

function EmailBox() {
  return (
    <Box className="col-span-6 md:col-span-4 row-span-1 flex items-center justify-between p-2 px-3">
      <MdAlternateEmail className="size-6 text-teal-300" />
      <p>{myInfo.contact.email}</p>
    </Box>
  );
}

function ReloadBox({ onClick }: { onClick: () => void }) {
  return (
    <Box className="col-span-3 row-span-1 md:col-span-1 md:row-span-2 flex items-center justify-center p-0">
      <motion.button
        onClick={onClick}
        whileHover={{ rotate: 360, scale: 1.2 }}
        transition={{
          duration: 0.75,
        }}
      >
        <FaRedo className="size-8 text-zinc-600" />
      </motion.button>
    </Box>
  );
}

function StackBox() {
  return (
    <Box className="col-span-6 md:col-span-5 row-span-2 grid grid-cols-4 gap-4">
      <div className="col-span-2  flex items-center justify-center">
        <motion.h2 whileHover={{ scale: 1.1 }} className="font-bold text-xl">
          TECK STACK
        </motion.h2>
      </div>
      {myInfo.skills.map((skill) => (
        <StackItem key={skill.name} className={skill.className}>
          {skill.children}
        </StackItem>
      ))}
    </Box>
  );
}

type BoxProps = { className?: string } & HTMLMotionProps<"div">;

function Box({ className, ...rest }: BoxProps) {
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

type StackItemProps = { className?: string } & HTMLMotionProps<"div">;

function StackItem({ className, ...rest }: StackItemProps) {
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
}
