import { myData } from "../../data/Mine";
import "./AboutMe.css";
import AboutMeImg from "./AboutMeImg/AboutMeImg";
import AboutMeText from "./AboutMeText/AboutMeText";

export type AboutMeProps = {
  refObj: React.RefObject<HTMLElement>;
};

function AboutMe({ refObj }: AboutMeProps) {
  return (
    <section className="about-me__container" ref={refObj}>
      <AboutMeText
        firstName={myData.firstName}
        lastName={myData.lastName}
        summary={myData.summary}
      />
      <AboutMeImg src="Damian" />
    </section>
  );
}

export default AboutMe;
