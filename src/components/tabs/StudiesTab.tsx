import { GraduationCap, MapPin } from "lucide-react";
import { myInfo } from "../../data/my_info";
import { FaCertificate } from "react-icons/fa";
import { ImNewTab } from "react-icons/im";

const EducationItem = ({
  degree,
  institution,
  location,
  dateRange,
  description,
  achievements,
  courses,
}: {
  degree: string;
  institution: string;
  location: string;
  dateRange: string;
  description: string;
  achievements?: string[];
  courses?: string[];
}) => (
  <div className="bg-zinc-800/50 rounded-lg p-6 mb-6">
    <div className="flex justify-between items-start mb-2">
      <div>
        <h3 className="text-xl font-semibold text-zinc-100">{degree}</h3>
        <p className="text-zinc-300">{institution}</p>
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
    {achievements && achievements.length > 0 && (
      <div className="mb-4">
        <h4 className="text-zinc-200 font-semibold mb-2">Key Achievements:</h4>
        <ul className="list-disc list-inside text-zinc-300">
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
    )}
    {courses && courses.length > 0 && (
      <div>
        <h4 className="text-zinc-200 font-semibold mb-2">
          Relevant Coursework:
        </h4>
        <div className="flex flex-wrap gap-2">
          {courses.map((course, index) => (
            <span
              key={index}
              className="text-zinc-300 border border-zinc-600 rounded px-2 py-1 text-sm"
            >
              {course}
            </span>
          ))}
        </div>
      </div>
    )}
  </div>
);

const CertificationItem = ({
  title,
  date,
  description,
  credentialId,
  url,
}: {
  title: string;
  date: string;
  description: string;
  credentialId?: string;
  url?: string;
}) => (
  <div className="bg-zinc-800/50 rounded-lg p-6 mb-6">
    <div className="flex justify-between items-start mb-2">
      <div>
        <h3 className="text-xl font-semibold text-zinc-100">{title}</h3>
        {credentialId && <p className="text-zinc-300">{credentialId}</p>}
      </div>
      <span className="bg-zinc-700 text-zinc-300 px-2 py-1 rounded text-sm">
        {date}
      </span>
    </div>
    <p className="text-zinc-300 mb-4">{description}</p>
    {url && (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-zinc-300 hover:text-zinc-100 flex gap-2"
      >
        View Credential
        <ImNewTab />
      </a>
    )}
  </div>
);

export function StudiesTab() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <GraduationCap className="w-6 h-6 text-zinc-400" />
        <h2 className="text-3xl font-bold text-zinc-50">Education</h2>
      </div>

      <div className="space-y-8">
        {myInfo.studies.map((edu, index) => (
          <EducationItem key={index} {...edu} />
        ))}
      </div>

      <div className="flex items-center gap-3">
        <FaCertificate className="w-6 h-6 text-zinc-400" />
        <h2 className="text-3xl font-bold text-zinc-50">Certifications</h2>
      </div>

      <div className="space-y-8">
        {myInfo.certifications.map((edu, index) => (
          <CertificationItem key={index} {...edu} />
        ))}
      </div>

      <div className="bg-zinc-800/50 p-4 rounded-lg">
        <p className="text-zinc-300 text-center">
          My academic journey in Software Engineering has provided me with a
          strong foundation in computer science principles and practical
          software development skills, preparing me for the challenges of the
          ever-evolving tech industry.
        </p>
      </div>
    </div>
  );
}
