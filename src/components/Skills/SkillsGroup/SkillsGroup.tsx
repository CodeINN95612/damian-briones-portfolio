import styles from "./SkillsGroup.module.css";

import { Skill } from "../../../models/Skill";
import SkillItem from "../SkillItem/SkillItem";

export type SkillsGroupProps = {
  skills: Skill[];
};

function SkillsGroup({ skills }: SkillsGroupProps) {
  return (
    <div className={styles.container}>
      {skills.map((s, i) => (
        <SkillItem skill={s} key={i} />
      ))}
    </div>
  );
}

export default SkillsGroup;
