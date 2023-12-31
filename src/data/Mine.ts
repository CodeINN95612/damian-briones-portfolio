import { MyData } from "../models/MyData";

export const myData: MyData = {
  firstName: "Damián",
  lastName: "Briones",
  summary:
    "Software Engineer with a passion for programming and leading. Always looking to use my knowledge to help and teach people but also keen to learn and receive constructive criticism. I am also a problem solver with positivity and responsibility.",
  education: [
    {
      degree: "Software Engineer",
      institution: "Universidad de las Americas",
      year: "September 2019 - Current",
      image: "udla_logo_blanco.png",
    },
  ],
  experience: [
    {
      company: "CloudStudio Cia. Ltda.",
      title: "Software Engineer Intern",
      period: "Sep 2019 - Dec 2019",
      startingYear: 2019,
      location: "Quito, Ecuador",
      description: "Programming, Report Designing",
    },
    {
      company: "CloudStudio Cia. Ltda.",
      title: "Junior Software Engineer",
      period: "Dec 2019 - Sep 2023",
      startingYear: 2019,
      location: "Quito, Ecuador",
      description:
        "Programming, Training, Client Support, Maintaining Legacy Code",
    },
  ],
  skills: [
    {
      name: "C#",
      ammount: 4,
    },
    {
      name: ".NET",
      ammount: 4,
    },
    {
      name: "MS SQL Server",
      ammount: 4,
    },
    {
      name: "Typescript",
      ammount: 3,
    },
    {
      name: "React & NextJS",
      ammount: 3,
    },
    {
      name: "Angular",
      ammount: 2,
    },
    {
      name: "C",
      ammount: 3,
    },
    {
      name: "Python",
      ammount: 3,
    },
    {
      name: "Java",
      ammount: 3,
    },
    {
      name: "Rust",
      ammount: 3,
    },
  ],
  services: [
    {
      service: "Maintaining & Refactoring Legacy Code",
      imgSrc: "gear.svg",
    },
    {
      service: "FullStack Software Developement",
      imgSrc: "code.svg",
    },
    {
      service: "Training, Coaching",
      imgSrc: "coach.svg",
    },
  ],
  projects: [
    {
      name: "CyanBot",
      description:
        "Discord bot for managing manga translators, their work, roles, and payment.",
      stack: "Pyhton",
    },
    {
      name: "Portfolio",
      description: "Personal developer portfolio.",
      url: "https://damian-briones-portfolio.vercel.app",
      stack: "ReactJs, Typescript",
    },
  ],
  languages: [
    {
      name: "Spanish",
      level: "Native",
    },
    {
      name: "English",
      level: "Advanced (C1)",
    },
  ],
  contact: {
    email: "damian.briones@outlook.com",
    phone: "+593987621334",
    github: "https://github.com/CodeINN95612",
    linkedIn: "https://www.linkedin.com/in/damián-briones-flachier-897435258/",
  },
};
