import { MapPin } from "lucide-react";
import { AnimatedBox } from "./AnimatedBox";
import { myInfo } from "../../assets/data";

export const AnimatedLocationBox = () => {
  return (
    <AnimatedBox className="col-span-3 row-span-1 flex items-center justify-between p-2 px-6">
      <MapPin className="size-6 text-teal-300" />
      <p>{myInfo.contact.location}</p>
    </AnimatedBox>
  );
};
