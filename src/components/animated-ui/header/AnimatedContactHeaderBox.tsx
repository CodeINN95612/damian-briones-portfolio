import { CopyIcon, MailIcon } from "lucide-react";
import { AnimatedBox } from "../AnimatedBox";
import { myInfo } from "../../../assets/data";
import { BsWhatsapp } from "react-icons/bs";

export const AnimatedContactHeaderBox = () => {
  const contactOptions = [
    {
      label: "Mobile / WhatsApp",
      value: myInfo.contact.phone,
      icon: <BsWhatsapp className="size-6 text-green-500" />,
      link: myInfo.contact.whatsapp,
    },
  ];

  return (
    <AnimatedBox className="col-span-5 row-span-2 p-0">
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
    </AnimatedBox>
  );
};
