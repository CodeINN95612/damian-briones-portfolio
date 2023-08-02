import styles from "./Section.module.css";

import SectionTitle from "../SectionTitle/SectionTitle";
import Title from "../Title/Title";

export type SectionProps = {
  refObj: React.RefObject<HTMLElement>;
  title: string;
  subtitle: React.ReactNode;
  children: React.ReactNode;
};

function Section({ refObj, title, subtitle, children }: SectionProps) {
  return (
    <section className={styles.section} ref={refObj}>
      <SectionTitle title={title} />
      <Title>{subtitle}</Title>
      {children}
    </section>
  );
}

export default Section;
