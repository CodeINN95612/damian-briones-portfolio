import { Education } from "../../../models/Education";
import styles from "./EducationCard.module.css";

export type EducationCardProps = {
  education: Education;
  isEven: boolean;
};

function EducationCard({ education, isEven }: EducationCardProps) {
  return (
    <div className={styles.card}>
      <img src={`/images/${education.image}`} alt={education.institution} />
      <h4>{education.institution.toUpperCase()}</h4>
      <p className={isEven ? styles.degree_cyan : styles.degree_purple}>
        {education.degree.toUpperCase()}
      </p>
      <p className={styles.year}>{education.year}</p>
    </div>
  );
}

export default EducationCard;
