import { Code, ExternalLink } from "lucide-react";
import { AnimatedBox } from "./AnimatedBox";
import { myInfo } from "../../assets/data";
import { SiGithub } from "react-icons/si";

export type AnimatedProjectsBoxProps = {
  currentProjectId: number;
};

export const AnimatedProjectsBox = ({
  currentProjectId,
}: AnimatedProjectsBoxProps) => {
  const currentProject = myInfo.projects[currentProjectId];
  const maxProjects = myInfo.projects.length;

  const { title, description, image, technologies, liveLink, githubLink } =
    currentProject;

  return (
    <AnimatedBox className="col-span-9 row-span-6 max-h-[90vh] overflow-y-auto">
      <div className="relative">
        <div className="absolute bottom-0 right-0 text-sm text-zinc-500">
          {currentProjectId + 1} / {maxProjects}
        </div>
        <h2 className="text-4xl font-medium leading-tight flex items-center gap-3">
          <Code className="size-8 text-zinc-400" />{" "}
          {`Project No. ${currentProjectId + 1}`}
        </h2>
        <img
          src={image}
          alt={title}
          className="w-full h-80 object-cover mt-4 rounded border border-zinc-700 shadow-lg"
        />
        <div className="mt-4">
          <h3 className="text-xl font-semibold text-zinc-100 mb-2">{title}</h3>
          <p className="text-zinc-300 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="text-zinc-300 bg-zinc-700/50 rounded px-2 py-1 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-zinc-300 hover:text-zinc-100 bg-zinc-700 px-4 py-1 rounded-full"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Live Demo
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-zinc-300 hover:text-zinc-100 bg-zinc-700 px-4 py-1 rounded-full"
              >
                <SiGithub className="w-4 h-4 mr-1" />
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </AnimatedBox>
  );
};
