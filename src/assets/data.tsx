import { Book, Dumbbell, Gamepad2 } from "lucide-react";
import { AiOutlineDotNet } from "react-icons/ai";
import { FaDocker, FaNodeJs, FaReact } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import type { Experience } from "../common/types";

export const myInfo = {
  name: "Damián Briones",
  alias: "Damian",
  title: "Backend Software Engineer",
  image: "/personal.jpeg",
  skills: [
    {
      name: ".Net",
      children: <AiOutlineDotNet className="size-10" />,
      className: "bg-violet-500",
    },
    {
      name: "React",
      children: <FaReact className="size-10" />,
      className: "bg-sky-500",
    },
    {
      name: "Docker",
      children: <FaDocker className="size-10" />,
      className: "bg-blue-700",
    },
    {
      name: "NodeJS",
      children: <FaNodeJs className="size-10" />,
      className: "bg-green-500",
    },
    {
      name: "Azure",
      children: <VscAzure className="size-10" />,
      className: "bg-blue-500",
    },
    {
      name: "Sql",
      children: <TbSql className="size-10" />,
      className: "bg-yellow-500 text-zinc-900",
    },
  ],
  about_me: {
    head: "I'm a backend software developer with six years of experience, and I’m gradually moving toward fullstack work. I enjoy figuring out problems and writing innovative software. I’m open to new remote opportunities.",
    snapshot: [
      {
        label: "10 000 +",
        value: "Lines of code written",
      },
      {
        label: "6",
        value: "Years of experience",
      },
      {
        label: "2.5",
        value: "Spoken languages",
      },
      {
        label: "2",
        value: "Countries lived in",
      },
    ],
    hobbies: [
      {
        name: "Gaming",
        icon: <Gamepad2 className="size-6 text-zinc-400" />,
      },
      {
        name: "Reading",
        icon: <Book className="size-6 text-zinc-400" />,
      },
      {
        name: "Gym",
        icon: <Dumbbell className="size-6 text-zinc-400" />,
      },
    ],
    other:
      "I’m open to new remote opportunities that bring a real challenge and better overall conditions. Outside of work, I write code for fun, watch more series than I care to admit, play some Minecraft, and make time for the gym.",
  },
  contact: {
    email: "work@damianbriones.dev",
    phone: "+593 98 762 1334",
    whatsapp: "https://wa.me/593987621334",
    linkedin: "https://www.linkedin.com/in/damian-briones-flachier/",
    github: "https://www.github.com/CodeINN95612",
    location: "Quito, Ecuador",
  },
  experience: {
    work: [
      {
        title: "Backend Software Engineer",
        company: "Logiztik Alliance Group",
        location: "Quito, Ecuador",
        dateRange: "2023 - Today",
        description:
          "Development and maintenance of a logistics system for the company. Refactoring of legacy software. Implementation of new features. Implementation of microservices. Team leader with scrum",
        skills: ["C#", ".NET", "SQL", "Docker", "Azure Devops"],
        current: true,
      },
      {
        title: "Junior Software Engineer",
        company: "CloudStudio",
        location: "Quto, Ecuador",
        dateRange: "2019 - 2023",
        description:
          "Development and maintenance of a financial system for banks in the country. Refactoring of legacy software. Customer Support. Train new programmers",
        skills: ["C#", ".NET", "SQL", "Silverlight"],
      },
    ] satisfies Experience[],
    freelance: [
      {
        project: "Cyan-Bot",
        client: "Independent",
        description:
          "Discord bot for that managing payments and roles in a translation community",
        duration: "3 months",
        skills: ["Python", "MongoDB"],
      },
      {
        project: "ULI",
        client: "Universidad de las Américas",
        description:
          "AI chatbot for customer service customized with information about the institution",
        duration: "1 year",
        skills: ["Python", "React", "C#", "SignalR", "Azure"],
      },
    ],
  },
  studies: [
    {
      degree: "Bachelor's Degree in Computer Science",
      institution: "Universidad de las Américas",
      location: "Quito, Ecuador",
      dateRange: "2019 - 2023",
      description:
        "Focused on software development, algorithms, data structures, and software engineering.",
      achievements: [
        "Graduated with a GPA of 3.6/4.0",
        "Led a team project that is currently used by the university",
      ],
      courses: [
        "Data Structures",
        "Algorithms",
        "Object-Oriented Programming",
        "Database Systems",
        "Software Development",
        "Software Engineering Principles",
        "Artificial Intelligence",
        "Software Testing",
        "Sistems Integration",
        "QA",
      ],
    },
  ],
  projects: [
    {
      title: "Developer Portfolio",
      description: "My personal developer portfolio",
      technologies: ["React", "Tailwind CSS", "Typescript", "Framer Motion"],
      liveLink: "https://damian-briones-portfolio.vercel.app",
      githubLink: "https://github.com/CodeINN95612/damian-briones-portfolio",
      image: "/projects/portfolio.png",
    },
  ],
  certifications: [
    {
      title: "Microsoft Certified: Azure Fundamentals",
      date: "2024",
      description:
        "Demonstrates foundational level knowledge of cloud services and how those services are provided with Microsoft Azure.",
      credentialId: "E795636135DDD8FD",
      url: "https://learn.microsoft.com/api/credentials/share/en-us/DamianBriones-9572/E795636135DDD8FD?sharingId=5BCEED54F209B1C6",
    },
    {
      title: "ScrumStudy Scrum Fundamentals Certified",
      date: "2024",
      description:
        "Certification demonstrating knowledge of Scrum fundamentals.",
    },
  ],
};
