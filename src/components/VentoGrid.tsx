import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import { AnimatedBox } from "./animated-ui/AnimatedBox";
import { myInfo } from "../assets/data";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaLanguage } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { MapPin } from "lucide-react";
import { AnimatedMenuBox } from "./animated-ui/AnimatedMenuBox";
import { AnimatedHeaderBox } from "./animated-ui/AnimatedHeaderBox";
import { AnimatedSkillsHobbiesBox } from "./animated-ui/AnimatedSkillsHobbiesBox";
import { AnimatedExperienceBox } from "./animated-ui/AnimatedExperienceBox";
import { AnimatedFreelanceBox } from "./animated-ui/AnimatedFreelanceBox";
import { AnimatedSnapshotBox } from "./animated-ui/AnimatedSnapshotBox";
import { AnimatedImageBox } from "./animated-ui/AnimatedImageBox";
import { AnimatedHobbiesBox } from "./animated-ui/AnimatedHobbiesBox";
import { AnimatedEducationBox } from "./animated-ui/AnimatedEducationBox";
import { useSectionContext } from "../hooks/useSectionContext";
import { AnimatedRightLeftBox } from "./animated-ui/AnimatedRightLeftBox";
import { AnimatedProjectsBox } from "./animated-ui/AnimatedProjectsBox";

export const VentoGrid = () => {
  return (
    <motion.section
      initial="initial"
      animate="animate"
      transition={{
        staggerChildren: 0.1,
      }}
      className="grid grid-cols-6 gap-4 grid-flow-dense z-[5] md:grid-cols-12 md:max-w-4xl "
    >
      <NormalOrProjectsBox />
    </motion.section>
  );
};

const NormalOrProjectsBox = () => {
  const { activeSection } = useSectionContext();

  const [currentProjectId, setCurrentProjectId] = useState<number>(0);
  const maxProjectId = myInfo.projects.length - 1;

  const setNextProject = useCallback(() => {
    setCurrentProjectId((prev) => (prev < maxProjectId ? prev + 1 : 0));
  }, [maxProjectId]);

  const setPreviousProject = useCallback(() => {
    setCurrentProjectId((prev) => (prev > 0 ? prev - 1 : maxProjectId));
  }, [maxProjectId]);

  return (
    <>
      {activeSection === "projects" ? (
        <AnimatedProjectsBox currentProjectId={currentProjectId} />
      ) : null}
      {activeSection !== "projects" ? <EmptyBox /> : null}
      {activeSection !== "projects" ? <AnimatedHeaderBox /> : null}
      {activeSection !== "projects" ? <ExperienceOrAboutOrImageBox /> : null}
      <AnimatedMenuBox />
      {activeSection !== "projects" ? <SecondaryInformationBox /> : null}
      {activeSection !== "projects" ? <LanguagesBox /> : null}
      {activeSection !== "projects" ? <FreelanceOrSocialsBox /> : null}
      {activeSection !== "projects" ? <EmailBox /> : null}
      {activeSection !== "projects" ? <LocationBox /> : null}
      {activeSection !== "projects" ? <EmptyBox /> : null}
      {activeSection === "projects" ? (
        <AnimatedRightLeftBox
          onLeftClick={setPreviousProject}
          onRightClick={setNextProject}
        />
      ) : null}
    </>
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
  const { activeSection } = useSectionContext();

  const excludedSections = ["experience", "education"];
  if (excludedSections.includes(activeSection)) {
    return null;
  }

  return (
    <AnimatedBox className="col-span-5 row-span-1 flex items-center justify-between p-2 px-6">
      <p>English</p> <FaLanguage className="size-10 text-teal-300" />{" "}
      <p>Spanish</p>
    </AnimatedBox>
  );
};

const EmailBox = () => {
  const { activeSection } = useSectionContext();

  const excludedSections = ["experience", "education"];
  if (excludedSections.includes(activeSection)) {
    return null;
  }

  return (
    <AnimatedBox className="col-span-5 row-span-1 flex items-center justify-between p-2 px-6">
      <MdAlternateEmail className="size-6 text-teal-300" />
      <p className="select-all">{myInfo.contact.email}</p>
    </AnimatedBox>
  );
};

const SecondaryInformationBox = () => {
  const { activeSection } = useSectionContext();

  if (activeSection === "experience") {
    return <AnimatedExperienceBox experience={myInfo.experience.work[0]} />;
  }

  if (activeSection === "about") {
    return <AnimatedHobbiesBox />;
  }

  if (activeSection === "education") {
    return <AnimatedEducationBox education={myInfo.studies[0]} />;
  }

  return <AnimatedSkillsHobbiesBox />;
};

const ExperienceOrAboutOrImageBox = () => {
  const { activeSection } = useSectionContext();

  if (activeSection === "experience") {
    return (
      <AnimatedExperienceBox
        className="col-span-4 row-span-3"
        experience={myInfo.experience.work[1]}
        sm
      />
    );
  }

  if (activeSection === "about") {
    return <AnimatedSnapshotBox />;
  }

  return <AnimatedImageBox />;
};

const FreelanceOrSocialsBox = () => {
  const { activeSection } = useSectionContext();

  if (activeSection === "experience") {
    return <AnimatedFreelanceBox freelanceJobs={myInfo.experience.freelance} />;
  }

  return (
    <>
      <LinkedInBox />
      <GithubBox />
    </>
  );
};
