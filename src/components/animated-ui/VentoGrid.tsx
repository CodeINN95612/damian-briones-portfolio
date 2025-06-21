import { motion, type HTMLMotionProps } from "framer-motion";
import { useContext, useState } from "react";
import { AnimatedBox } from "./AnimatedBox";
import { myInfo } from "../../assets/data";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaCode, FaLanguage, FaRedo } from "react-icons/fa";
import { MdAlternateEmail, MdWork } from "react-icons/md";
import { twMerge } from "tailwind-merge";
import { IoHome } from "react-icons/io5";
import { TbUserScan } from "react-icons/tb";
import { PiStudentFill } from "react-icons/pi";
import { RiContactsBook3Fill } from "react-icons/ri";
import { BiDownload } from "react-icons/bi";
import { MapPin } from "lucide-react";
import { AnimatedMenuBox } from "./AnimatedMenuBox";
import { SectionContext } from "../../context/SectionContext";
import { AnimatedHeaderBox, type ContactOption } from "./AnimatedHeaderBox";
import { BsWhatsapp } from "react-icons/bs";
import { AnimatedImageAboutBox } from "./AnimatedImageAboutBox";

export const VentoGrid = () => {
  const { setActiveSection } = useContext(SectionContext);

  const [key, setKey] = useState(0);

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

  const contactOptions: ContactOption[] = [
    {
      label: "Mobile / WhatsApp",
      value: myInfo.contact.phone,
      icon: <BsWhatsapp className="size-6 text-green-500" />,
      link: myInfo.contact.whatsapp,
    },
  ];

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
      <AnimatedHeaderBox
        alias={myInfo.alias}
        title={myInfo.title}
        about={myInfo.about_me.head}
        contactOptions={contactOptions}
      />
      <AnimatedImageAboutBox
        imagePath={myInfo.image}
        snapshot={myInfo.about_me.snapshot}
      />
      <AnimatedMenuBox
        hidden={false}
        menuItems={menuItems}
        cvButton={<CvButton />}
      />
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
    <AnimatedBox className="col-span-4 sm:col-span-5 row-span-1 bg-transparent border-none md:hidden" />
  );
}

function LocationBox() {
  return (
    <AnimatedBox className="col-span-3 row-span-1 flex items-center justify-between p-2 px-3">
      <MapPin className="size-6 text-teal-300" />
      <p>{myInfo.contact.location}</p>
    </AnimatedBox>
  );
}

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
}

const GithubBox = () => {
  return (
    <AnimatedBox className="col-span-2 row-span-2 bg-gray-700 p-0">
      <motion.a
        whileHover={{ y: -15, scale: 1.2 }}
        href={myInfo.contact.github}
        target="_blank"
        rel="noopener noreferrer"
        className="size-full flex items-center justify-center p-4"
      >
        <SiGithub className="size-10" />
      </motion.a>
    </AnimatedBox>
  );
};

const LinkedInBox = () => {
  return (
    <AnimatedBox className="col-span-2 row-span-2 bg-sky-700 p-0">
      <motion.a
        whileHover={{ y: -15, scale: 1.2 }}
        href={myInfo.contact.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="size-full flex items-center justify-center p-4"
      >
        <SiLinkedin className="size-10" />
      </motion.a>
    </AnimatedBox>
  );
};

const LanguagesBox = () => {
  return (
    <AnimatedBox className="col-span-6 md:col-span-4 row-span-1 flex items-center justify-between p-2 px-3">
      <p>English</p> <FaLanguage className="size-10 text-teal-300" />{" "}
      <p>Spanish</p>
    </AnimatedBox>
  );
};

const EmailBox = () => {
  return (
    <AnimatedBox className="col-span-6 md:col-span-4 row-span-1 flex items-center justify-between p-2 px-3">
      <MdAlternateEmail className="size-6 text-teal-300" />
      <p className="select-all">{myInfo.contact.email}</p>
    </AnimatedBox>
  );
};

const ReloadBox = ({ onClick }: { onClick: () => void }) => {
  return (
    <AnimatedBox className="col-span-3 row-span-1 md:col-span-1 md:row-span-2 flex items-center justify-center p-0">
      <motion.button
        onClick={onClick}
        whileHover={{ rotate: 360, scale: 1.2 }}
        transition={{
          duration: 0.75,
        }}
      >
        <FaRedo className="size-8 text-zinc-600" />
      </motion.button>
    </AnimatedBox>
  );
};

function StackBox() {
  return (
    <AnimatedBox className="col-span-6 md:col-span-5 row-span-2 grid grid-cols-4 gap-4">
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
    </AnimatedBox>
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
