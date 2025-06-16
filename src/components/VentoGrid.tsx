import { motion, type HTMLMotionProps } from "framer-motion";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  type ForwardedRef,
} from "react";
import { Box } from "./animated-ui/Box";
import { myInfo } from "../assets/data";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaCode, FaLanguage, FaRedo } from "react-icons/fa";
import { MdAlternateEmail, MdWork } from "react-icons/md";
import { twMerge } from "tailwind-merge";
import { FiArrowRight } from "react-icons/fi";
import { IoHome } from "react-icons/io5";
import { TbUserScan } from "react-icons/tb";
import { PiStudentFill } from "react-icons/pi";
import { RiContactsBook3Fill } from "react-icons/ri";
import { BiDownload } from "react-icons/bi";
import { MapPin } from "lucide-react";

export const VentoGrid = () => {
  const [key, setKey] = useState(0);

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
      <HeaderBox />
      <ImageBox />
      <MenuBox hideOnSmall={false} />
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
};

function EmptyBox() {
  return (
    <Box className="col-span-4 sm:col-span-5 row-span-1 bg-transparent border-none md:hidden" />
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

const HeaderBox = () => {
  return (
    <Box className="col-span-6 md:col-span-5 row-span-2">
      <h1 className=" text-4xl font-medium  mt-5 leading-tight">
        Hi, I'm {myInfo.alias}.
      </h1>
      <p className="text-4xl font-medium leading-tight text-zinc-400 mb-10">
        I'm a {myInfo.title}.
      </p>
      <button className="flex items-center gap-1 text-teal-300 hover:underline">
        Contact me <FiArrowRight />
      </button>
    </Box>
  );
};

export function CvButton() {
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
          transition={{ repeat: Infinity, duration: 6 }}
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
}

export type MenuBoxItemPosition = { top: number; opacity: number };
export type MenuBoxProps = {
  setTab?: (tab: React.ReactNode | null) => void;
  hideOnSmall: boolean;
};
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
        // onClick={() => setTab(null)}
      >
        <IoHome className="size-6" />
        HOME
      </MenuBoxItem>
      <MenuBoxItem
        setPosition={setPosition}
        // onClick={() => setTab(<AboutTab />)}
      >
        ABOUT
        <TbUserScan className="size-6" />
      </MenuBoxItem>
      <MenuBoxItem
        setPosition={setPosition}
        // onClick={() => setTab(<ExperienceTab />)}
      >
        <MdWork className="size-6" />
        EXPERIENCE
      </MenuBoxItem>
      <MenuBoxItem
        setPosition={setPosition}
        // onClick={() => setTab(<StudiesTab />)}
      >
        EDUCATION
        <PiStudentFill className="size-6" />
      </MenuBoxItem>
      <MenuBoxItem
        setPosition={setPosition}
        // onClick={() => setTab(<ProjectsTab />)}
      >
        <FaCode className="size-6" />
        PROJECTS
      </MenuBoxItem>
      <MenuBoxItem
        setPosition={setPosition}
        // onClick={() => setTab(<ContactTab />)}
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
  onClick?: () => void;
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
        // onClick={() => onClick()}
      >
        {children}
      </button>
    </motion.div>
  );
});

const ImageBox = () => {
  return (
    <Box className="col-span-4 row-span-4 p-1 min-w-12">
      <img
        src={myInfo.image}
        alt="A photo of me"
        className="rounded-md w-full h-full"
      />
    </Box>
  );
};

const GithubBox = () => {
  return (
    <Box className="col-span-2 row-span-2 bg-gray-700 p-0">
      <motion.a
        whileHover={{ y: -15, scale: 1.2 }}
        href={myInfo.contact.github}
        target="_blank"
        rel="noopener noreferrer"
        className="size-full flex items-center justify-center p-4"
      >
        <SiGithub className="size-10" />
      </motion.a>
    </Box>
  );
};

const LinkedInBox = () => {
  return (
    <Box className="col-span-2 row-span-2 bg-sky-700 p-0">
      <motion.a
        whileHover={{ y: -15, scale: 1.2 }}
        href={myInfo.contact.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="size-full flex items-center justify-center p-4"
      >
        <SiLinkedin className="size-10" />
      </motion.a>
    </Box>
  );
};

const LanguagesBox = () => {
  return (
    <Box className="col-span-6 md:col-span-4 row-span-1 flex items-center justify-between p-2 px-3">
      <p>English</p> <FaLanguage className="size-10 text-teal-300" />{" "}
      <p>Spanish</p>
    </Box>
  );
};

const EmailBox = () => {
  return (
    <Box className="col-span-6 md:col-span-4 row-span-1 flex items-center justify-between p-2 px-3">
      <MdAlternateEmail className="size-6 text-teal-300" />
      <p>{myInfo.contact.email}</p>
    </Box>
  );
};

const ReloadBox = ({ onClick }: { onClick: () => void }) => {
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
};

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
