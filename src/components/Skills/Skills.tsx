import { myData } from "../../data/Mine";
import Section from "../Common/Section/Section";
import SkillsGroup from "./SkillsGroup/SkillsGroup";

export type SkillsProps = {
  refObj: React.RefObject<HTMLElement>;
};

function Skills({ refObj }: SkillsProps) {
  return (
    <Section
      refObj={refObj}
      title="MY KNOWLEDGE"
      subtitle={
        <>
          <span>Sk</span>ills
        </>
      }
    >
      <SkillsGroup skills={myData.skills}></SkillsGroup>
    </Section>
  );
}

export default Skills;
