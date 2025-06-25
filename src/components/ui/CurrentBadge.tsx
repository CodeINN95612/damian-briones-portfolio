import { cn } from "../../lib/utils";

export type CurrentBadgeProps = {
  className?: string;
};

export const CurrentBadge = ({ className }: CurrentBadgeProps) => {
  return (
    <span className={cn("px-2 py-1 rounded text-xs", className)}>current</span>
  );
};
