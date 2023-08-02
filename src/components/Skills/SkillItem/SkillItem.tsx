import styles from "./SkillItem.module.css";

import { Skill } from "../../../models/Skill";

export type SkillItemProps = {
  skill: Skill;
};

function SkillItem({ skill }: SkillItemProps) {
  const maxAmmount = 5;
  const circles = Array.from(
    { length: maxAmmount },
    (_, index) => index < skill.ammount
  );

  return (
    <div className={styles.card}>
      <h4>{skill.name}</h4>
      <div className={styles.circles}>
        {circles.map((filled, i) => (
          <div
            key={i}
            className={`${styles.circle} ${
              filled ? styles.filled : styles.empty
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default SkillItem;
