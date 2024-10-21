import { HTMLMotionProps, motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { FaLanguage, FaRedo } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { twMerge } from "tailwind-merge";
import {
  AnimatedHamburgerButton,
  AnimatedHamburgerButtonProps,
} from "./AnimatedHamburgerButton";
import { ContactTab } from "./tabs/ContactTab";
import { myInfo } from "../data/my_info";
import { Box } from "./Box";
import { MenuBox } from "./menu/MenuBox";

export type HomeGridProps = {
  setTab: (tab: React.ReactNode | null) => void;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMenuOpen: boolean;
};

export function HomeGrid({ setTab, setIsMenuOpen, isMenuOpen }: HomeGridProps) {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      setKey((p) => (p > 1000 ? 0 : p + 1));
      setIsMenuOpen(false);
      setTab(null);
    });

    resizeObserver.observe(document.body);

    return () => resizeObserver.disconnect();
  }, [setIsMenuOpen]);

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
      <MenuBox setTab={setTab} hideOnSmall={false} />
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

function GithubBox() {
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
}

function LinkedInBox() {
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
