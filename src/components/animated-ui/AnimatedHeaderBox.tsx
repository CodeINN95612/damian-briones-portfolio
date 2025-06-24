import { FiArrowRight } from "react-icons/fi";
import { AnimatedBox } from "./AnimatedBox";
import { SectionContext, type Section } from "../../context/SectionContext";
import { useContext } from "react";
import {
  BriefcaseBusiness,
  CopyIcon,
  MailIcon,
  PersonStandingIcon,
} from "lucide-react";

export type ContactOption = {
  label: string;
  icon: React.ReactNode;
  value: string;
  link: string;
};

export type AnimatedHeaderBoxProps = {
  alias: string;
  title: string;
  about: string;
  contactOptions: ContactOption[];
};

export const AnimatedHeaderBox = ({
  alias,
  title,
  about,
  contactOptions,
}: AnimatedHeaderBoxProps) => {
  const { activeSection, setActiveSection } = useContext(SectionContext);

  return (
    <AnimatedBox
      className="col-span-6 md:col-span-5 row-span-2 p-0"
      sectionAnimated
    >
      {activeSection === "contact"
        ? renderAnimatedContactSection(contactOptions)
        : activeSection == "about"
        ? renderAboutMeSection(about)
        : activeSection === "experience"
        ? renderExperienceHeader()
        : renderHeaderSection(alias, title, setActiveSection)}
    </AnimatedBox>
  );
};

const renderHeaderSection = (
  alias: string,
  title: string,
  setActiveSection: (section: Section) => void
) => {
  return (
    <div className="p-6">
      <h1 className=" text-4xl font-medium  mt-5 leading-tight">
        Hi, I'm {alias}.
      </h1>
      <p className="text-4xl font-medium leading-tight text-zinc-400 mb-10">
        I'm a {title}.
      </p>
      <button
        className="flex items-center gap-1 text-teal-300 hover:underline"
        onClick={() => setActiveSection("contact")}
      >
        Contact me <FiArrowRight />
      </button>
    </div>
  );
};

const renderAnimatedContactSection = (contactOptions: ContactOption[]) => {
  return (
    <div className="p-8 space-y-5">
      <h2 className="text-4xl font-medium leading-tight flex items-center gap-3">
        <MailIcon className="size-8 text-zinc-400" /> Contact Me
      </h2>
      <p className="text-zinc-300">
        I'm always open to new opportunities and collaborations. Feel free to
        reach out through any of my available channels:
      </p>
      <div className="grid grid-cols-1 gap-2">
        {contactOptions.map((option, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 p-2 rounded bg-zinc-800 hover:bg-zinc-700 transition group cursor-pointer"
          >
            <a
              href={option.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 flex-1"
              title={option.label}
            >
              <span className="text-xl">{option.icon}</span>
              <span className="truncate">{option.value}</span>
            </a>
            <button
              className="ml-2 p-1 rounded hover:bg-zinc-600 transition cursor-pointer"
              title={`Copy ${option.label}`}
              onClick={() => {
                navigator.clipboard.writeText(option.value);
              }}
            >
              <CopyIcon className="size-6 text-zinc-400" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const renderAboutMeSection = (aboutText: string) => {
  return (
    <div className="p-8 space-y-5 text-justify">
      <h2 className="text-4xl font-medium leading-tight flex items-center gap-3">
        <PersonStandingIcon className="size-8 text-zinc-400" /> About Me
      </h2>
      <p className="text-zinc-300">{aboutText}</p>
    </div>
  );
};

const renderExperienceHeader = () => {
  return (
    <div className="p-8 space-y-5">
      <h2 className="text-4xl font-medium leading-tight flex items-center gap-3">
        <BriefcaseBusiness className="size-8 text-zinc-400" /> Experience
      </h2>
      <p className="text-zinc-300">
        I have actual hands on experience in software development, working with
        teams of different sizes.
        <br />
        Here are some of my professional experiences:
      </p>
    </div>
  );
};
