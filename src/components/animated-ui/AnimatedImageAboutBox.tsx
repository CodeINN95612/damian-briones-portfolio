import { useContext } from "react";
import { SectionContext } from "../../context/SectionContext";
import { AnimatedBox } from "./AnimatedBox";
import { Camera } from "lucide-react";

export type AnimatedImageAboutBoxProps = {
  snapshot: {
    label: string;
    value: string;
  }[];
  imagePath: string;
};

export const AnimatedImageAboutBox = ({
  snapshot,
  imagePath,
}: AnimatedImageAboutBoxProps) => {
  const { activeSection } = useContext(SectionContext);

  return (
    <AnimatedBox className="col-span-4 row-span-4 p-0 overflow-hidden">
      {activeSection === "about"
        ? renderSnapshotSection(snapshot)
        : renderImageSection(imagePath)}
    </AnimatedBox>
  );
};

const renderSnapshotSection = (
  snapshot: AnimatedImageAboutBoxProps["snapshot"]
) => {
  return (
    <div className="p-8 space-y-5 h-full">
      <h3 className="text-3xl font-medium flex items-center gap-3 text-zinc-100">
        <Camera className="size-6 text-zinc-400" /> Snapshot
      </h3>
      <div className="grid gap-px p-1">
        {snapshot.map((item, index) => (
          <div
            key={index}
            className="text-center p-4 hover:bg-zinc-700 transition rounded-md"
          >
            <div className="text-2xl font-bold text-zinc-100">{item.label}</div>
            <div className="text-sm text-zinc-400">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const renderImageSection = (imagePath: string) => {
  return (
    <img
      src={imagePath}
      alt="A photo of me"
      className="w-full h-full object-cover"
    />
  );
};
