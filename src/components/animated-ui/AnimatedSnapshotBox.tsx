import { Camera } from "lucide-react";
import { AnimatedBox } from "./AnimatedBox";
import { myInfo } from "../../assets/data";

export const AnimatedSnapshotBox = () => {
  return (
    <AnimatedBox className="col-span-4 row-span-4 p-0 overflow-hidden">
      <div className="p-8 space-y-5 h-full">
        <h3 className="text-3xl font-medium flex items-center gap-3 text-zinc-100">
          <Camera className="size-6 text-zinc-400" /> Snapshot
        </h3>
        <div className="grid gap-px p-1">
          {myInfo.about_me.snapshot.map((item, index) => (
            <div
              key={index}
              className="text-center p-4 hover:bg-zinc-700 transition rounded-md"
            >
              <div className="text-2xl font-bold text-zinc-100">
                {item.label}
              </div>
              <div className="text-sm text-zinc-400">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedBox>
  );
};
