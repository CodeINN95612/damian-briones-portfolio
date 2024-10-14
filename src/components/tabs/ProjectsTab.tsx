import { Code, ExternalLink, Github } from "lucide-react";
import { myInfo } from "../../data/my_info";

const ProjectItem = ({
  title,
  description,
  technologies,
  liveLink,
  githubLink,
  image,
}: {
  title: string;
  description: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  image: string;
}) => (
  <div className="bg-zinc-800/50 rounded-lg overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
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
            className="flex items-center text-zinc-300 hover:text-zinc-100"
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
            className="flex items-center text-zinc-300 hover:text-zinc-100"
          >
            <Github className="w-4 h-4 mr-1" />
            GitHub
          </a>
        )}
      </div>
    </div>
  </div>
);

export function ProjectsTab() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Code className="w-6 h-6 text-zinc-400" />
        <h2 className="text-3xl font-bold text-zinc-50">Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {myInfo.projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>

      <div className="bg-zinc-800/50 p-4 rounded-lg">
        <p className="text-zinc-300 text-center">
          These projects showcase my ability to build complex, user-centric
          applications using a variety of modern technologies and best practices
          in software development.
        </p>
      </div>
    </div>
  );
}
