import styles from "./ExperienceItem.module.css";

import { Experience } from "../../../models/Experience";

export type ExperienceItemProps = {
  data: Experience;
};

function ExperienceItem({ data }: ExperienceItemProps) {
  return (
    <div className={styles.experience_item__container}>
      <div className={styles.experience_item__bar}>
        <div className={styles.experience_item__circle}></div>
        <div className={styles.experience_item__line}></div>
      </div>
      <div className={styles.experience_item__starting}>
        <p>{data.startingYear}</p>
      </div>
      <div className={styles.experience_item}>
        <h4>{data.title}</h4>
        <h5>{data.company}</h5>
        <h6>
          {data.location} / {data.period}
        </h6>
        <p>{data.description}</p>
      </div>
    </div>
  );
}

export default ExperienceItem;
