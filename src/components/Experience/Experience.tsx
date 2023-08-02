import styles from "./Experience.module.css";

import { myData } from "../../data/Mine";
import Section from "../Common/Section/Section";
import ExperienceItem from "./ExperienceItem/ExperienceItem";

export type ExperienceProps = {
  refObj: React.RefObject<HTMLElement>;
};

function Experience({ refObj }: ExperienceProps) {
  const experienceArray = myData.experience;
  return (
    <Section
      refObj={refObj}
      title="EXPERIENCE"
      subtitle={
        <>
          Exp<span>erience</span>
        </>
      }
    >
      <div className={styles.experience}>
        {experienceArray.map((e, i) => (
          <ExperienceItem data={e} key={i} />
        ))}
      </div>
    </Section>
  );
}

export default Experience;
