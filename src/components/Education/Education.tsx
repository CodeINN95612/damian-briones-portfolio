import styles from "./Education.module.css";

import Section from "../Common/Section/Section";
import { myData } from "../../data/Mine";
import EducationCard from "./EducationCard/EducationCard";

export type EducationProps = {
  refObj: React.RefObject<HTMLElement>;
};

function Education({ refObj }: EducationProps) {
  return (
    <Section
      refObj={refObj}
      title="STUDIES"
      subtitle={
        <>
          Edu<span>cation</span>
        </>
      }
    >
      <div className={styles.content}>
        {myData.education.map((e, i) => (
          <EducationCard education={e} key={i} isEven={i % 2 == 0} />
        ))}
      </div>
    </Section>
  );
}

export default Education;
