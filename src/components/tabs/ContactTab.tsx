import React from "react";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { myInfo } from "../../data/my_info";
import { BsWhatsapp } from "react-icons/bs";

const ContactItem = ({
  icon: Icon,
  label,
  value,
  link,
}: {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
  link?: string;
}) => (
  <div className="flex items-center space-x-3">
    <Icon className="w-5 h-5 text-zinc-400" />
    <span className="text-zinc-300">{label}:</span>
    {link ? (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-indigo-400 hover:text-indigo-300"
      >
        {value}
      </a>
    ) : (
      <span className="text-zinc-100">{value}</span>
    )}
  </div>
);

export function ContactTab() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <Mail className="w-6 h-6 text-zinc-400" />
        <h2 className="text-3xl font-bold text-zinc-50">Contact Me</h2>
      </div>

      <div className="bg-zinc-800/50 p-6 rounded-lg space-y-6">
        <p className="text-zinc-300">
          I'm always open to new opportunities and collaborations. Feel free to
          reach out through any of the following channels:
        </p>

        <div className="space-y-4">
          <ContactItem
            icon={Mail}
            label="Email"
            value={myInfo.contact.email}
            link={`mailto:${myInfo.contact.email}`}
          />
          <ContactItem
            icon={Linkedin}
            label="LinkedIn"
            value={myInfo.contact.linkedin.split("www.")[1]}
            link={myInfo.contact.linkedin}
          />
          <ContactItem
            icon={Github}
            label="GitHub"
            value={myInfo.contact.github.split("www.")[1]}
            link={myInfo.contact.github}
          />
          <ContactItem
            icon={BsWhatsapp}
            label="Phone / Whatsapp"
            value={myInfo.contact.phone}
            link={myInfo.contact.whatsapp}
          />
          <ContactItem
            icon={MapPin}
            label="Location"
            value={myInfo.contact.location}
          />
        </div>

        <p className="text-zinc-300 mt-6">
          I typically respond within 24-48 hours. Looking forward to connecting
          with you!
        </p>
      </div>
    </div>
  );
}
