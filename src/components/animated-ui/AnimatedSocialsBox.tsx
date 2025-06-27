import { motion } from "framer-motion";
import { AnimatedBox } from "./AnimatedBox";
import { myInfo } from "../../assets/data";
import { SiGithub, SiLinkedin } from "react-icons/si";

export const AnimatedSocialsBox = () => {
  return (
    <>
      <LinkedInBox />
      <GithubBox />
    </>
  );
};

const GithubBox = () => {
  return (
    <AnimatedBox className="col-span-2 row-span-2 bg-gray-700 p-0 flex-1">
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
    <AnimatedBox className="col-span-2 row-span-2 bg-sky-700 p-0 flex-1 aspect-square md:aspect-auto">
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
