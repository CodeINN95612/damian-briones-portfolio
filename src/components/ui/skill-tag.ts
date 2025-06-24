import { cva, type VariantProps } from "class-variance-authority";

export const skillTagVariants = cva(
  "border rounded px-2 py-1 text-zinc-300 border-zinc-600 hover:bg-zinc-700 transition-colors",
  {
    variants: {
      size: {
        xs: "text-xs",
        md: "text-sm",
      },
    },
    defaultVariants: {
      size: "xs",
    },
  }
);

export type SkillTagProps = VariantProps<typeof skillTagVariants> & {
  skill: string;
  className?: string;
};
