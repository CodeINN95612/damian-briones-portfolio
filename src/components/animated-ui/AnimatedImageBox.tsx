import { myInfo } from "../../assets/data";
import { AnimatedBox } from "./AnimatedBox";

export const AnimatedImageBox = () => {
  return (
    <AnimatedBox className="col-span-4 row-span-4 p-0 overflow-hidden">
      <img
        src={myInfo.image}
        alt="A photo of me"
        className="w-full h-full object-cover"
      />
    </AnimatedBox>
  );
};
