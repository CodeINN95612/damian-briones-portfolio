import { useRef } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import NavBar from "./components/Nav/NavBar";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";

function App() {
  var aboutMeRef = useRef<HTMLElement>(null);
  var servicesRef = useRef<HTMLElement>(null);
  var experienceRef = useRef<HTMLElement>(null);
  var skillsRef = useRef<HTMLElement>(null);

  const links = [
    {
      ref: aboutMeRef,
      name: "About Me",
    },
    {
      ref: servicesRef,
      name: "Services",
    },
    {
      ref: experienceRef,
      name: "Experience",
    },
    {
      ref: skillsRef,
      name: "Skills",
    },
  ];

  return (
    <div className="App">
      <NavBar links={links} />
      <main>
        <AboutMe refObj={aboutMeRef} />
        <Services refObj={servicesRef} />
        <Skills refObj={skillsRef} />
        <Experience refObj={experienceRef} />
      </main>
    </div>
  );
}

export default App;
