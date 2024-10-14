import { Briefcase, MapPin } from "lucide-react";
import { myInfo } from "../../data/my_info";
import { SiFreelancer } from "react-icons/si";

const ExperienceItem = ({
  title,
  company,
  location,
  dateRange,
  description,
  skills,
}: {
  title: string;
  company: string;
  location: string;
  dateRange: string;
  description: string;
  skills: string[];
}) => (
  <div className="bg-zinc-800/50 rounded-lg p-6 mb-6">
    <div className="flex justify-between items-start mb-2">
      <div>
        <h3 className="text-xl font-semibold text-zinc-100">{title}</h3>
        <p className="text-zinc-300">{company}</p>
      </div>
      <span className="bg-zinc-700 text-zinc-300 px-2 py-1 rounded text-sm">
        {dateRange}
      </span>
    </div>
    <div className="flex items-center text-zinc-400 text-sm mb-4">
      <MapPin className="w-4 h-4 mr-1" />
      {location}
    </div>
    <p className="text-zinc-300 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="text-zinc-300 border border-zinc-600 rounded px-2 py-1 text-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const FreelanceItem = ({
  project,
  client,
  duration,
  description,
  skills,
}: {
  project: string;
  client: string | null;
  duration: string;
  description: string;
  skills: string[];
}) => (
  <div className="bg-zinc-800/50 rounded-lg p-6 mb-6">
    <div className="flex justify-between items-start mb-2">
      <div>
        <h3 className="text-xl font-semibold text-zinc-100">{project}</h3>
        {client && <p className="text-zinc-300">{client}</p>}
      </div>
      <span className="bg-zinc-700 text-zinc-300 px-2 py-1 rounded text-sm">
        {duration}
      </span>
    </div>
    <p className="text-zinc-300 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="text-zinc-300 border border-zinc-600 rounded px-2 py-1 text-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export function ExperienceTab() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Briefcase className="w-6 h-6 text-zinc-400" />
        <h2 className="text-3xl font-bold text-zinc-50">
          Professional Experience
        </h2>
      </div>

      <div className="space-y-8">
        {myInfo.experience.work.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>

      <div className="flex items-center gap-3">
        <SiFreelancer className="w-6 h-6 text-zinc-400" />
        <h2 className="text-3xl font-bold text-zinc-50">Freelance</h2>
      </div>

      <div className="space-y-8">
        {myInfo.experience.freelance.map((exp, index) => (
          <FreelanceItem key={index} {...exp} />
        ))}
      </div>

      <div className="bg-zinc-800/50 p-4 rounded-lg">
        <p className="text-zinc-300 text-center">
          With a diverse background in both structured corporate environments
          and dynamic freelance work, I bring a unique blend of skills and
          adaptability to every project.
        </p>
      </div>
    </div>
  );
}
