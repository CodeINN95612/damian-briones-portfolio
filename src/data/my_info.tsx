import { AiOutlineDotNet } from "react-icons/ai";
import { FaDocker, FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { SiAzuredevops } from "react-icons/si";
import { TbSql } from "react-icons/tb";

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
      children: <SiAzuredevops className="size-10" />,
      className: "bg-blue-500",
    },
    {
      name: "Sql",
      children: <TbSql className="size-10" />,
      className: "bg-yellow-500 text-zinc-900",
    },
  ],
  about_me: {
    image: "/personal.jpeg",
    about:
      "Born and raised in Quito, Ecuador, I'm a tech enthusiast with a deep love for software and continuous learning. When I'm not diving into code, you'll find me having fun playing videogames or following an internet course.",
    whatMakesMeTick:
      "I believe in my abilities to create impactful software solutions that can make a difference in people's lives. My journey in tech started when I built my first game at 12 and became fascinated with how software could bring any idea to life.",
    music:
      "Always on the hunt for new artists. Currently obsessed with Ariana Grande.",
    book: 'From sci-fi to philosophy, my bookshelf is as diverse as my code libraries. One of my favorite books is "Pet Sematary" by Stephen King.',
    game: {
      text: "Enjoy immersing myself in virtual worlds and sometimes some friendly competition. Current favorite:",
      favorite: "Minecraft",
    },
    travel:
      "Exploring new cultures and places whenever I can. Next destination: Belgium.",
    countriesLivedIn: 2,
    languagesSpoken: 2,
    linesOfCodeWritten: "10000+",
    fact: "Living in Ecuador, a country renowned for its incredible biodiversity and the Galápagos Islands, I had the unique opportunity to dive with sea turtles 🐢, marine iguanas, and hammerhead sharks 🦈. It remains one of my most cherished experiences.",
  },
  contact: {
    email: "damian.briones@outlook.com",
    phone: "+593 98 762 1334",
    whatsapp: "https://wa.me/593987621334",
    linkedin: "https://www.linkedin.com/in/damian-briones-flachier/",
    github: "https://www.github.com/CodeINN95612",
    location: "Quito, Ecuador",
  },
  experience: {
    work: [
      {
        title: "Semi Senior Backend Developer",
        company: "Logiztik Alliance Group",
        location: "Quito, Ecuador",
        dateRange: "2023 - Current",
        description:
          "Development and maintenance of a logistics system for the company. Refactoring of legacy software. Implementation of new features. Implementation of microservices. Team leader with scrum",
        skills: ["C#", ".NET", "SQL", "Docker", "Azure Devops"],
      },
      //   {
      //     title: "Lead Software Engineer",
      //     company: "Cidesoft",
      //     location: "Quito, Ecuador",
      //     dateRange: "2024 - Current",
      //     description:
      //       "Software consulting and development. Software architecture. Devops. Deployment of applications.",
      //     stack: ["C#", ".NET", "SQL", "Node.js", "React", "SvelteKit", "Jira"],
      //   },
      {
        title: "Junior Software Engineer",
        company: "CloudStudio",
        location: "Quto, Ecuador",
        dateRange: "2019 - 2023",
        description:
          "Development and maintenance of a financial system for banks in the country. Refactoring of legacy software. Customer Support. Train new programmers",
        skills: ["C#", ".NET", "SQL", "Silverlight"],
      },
    ],
    freelance: [
      {
        project: "Cyan-Bot",
        client: null,
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
        "QA",
      ],
    },
  ],
  projects: [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution with user authentication, product management, and payment integration.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      liveLink: "https://myecommerceapp.com",
      githubLink: "",
      image: "",
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
  ],
};
