import { cn } from "../../lib/utils";
import { skillTagVariants, type SkillTagProps } from "./skill-tag";

export const SkillTag: React.FC<SkillTagProps> = ({
  skill,
  size,
  className,
}) => {
  return (
    <span className={cn(skillTagVariants({ size }), className)}>{skill}</span>
  );
};
