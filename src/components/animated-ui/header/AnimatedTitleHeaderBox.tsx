import { useContext } from "react";
import { SectionContext } from "../../../context/SectionContext";
import { AnimatedBox } from "../AnimatedBox";
import { myInfo } from "../../../assets/data";
import { FiArrowRight } from "react-icons/fi";

export const AnimatedTitleHeaderBox = () => {
  const { setActiveSection } = useContext(SectionContext);
  return (
    <AnimatedBox className="col-span-5 row-span-2 p-0">
      <div className="p-6">
        <h1 className=" text-4xl font-medium  mt-5 leading-tight">
          Hi, I'm {myInfo.alias}.
        </h1>
        <p className="text-4xl font-medium leading-tight text-zinc-400 mb-10">
          I'm a {myInfo.title}.
        </p>
        <button
          className="flex items-center gap-1 text-teal-300 hover:underline"
          onClick={() => setActiveSection("contact")}
        >
          Contact me <FiArrowRight />
        </button>
      </div>
    </AnimatedBox>
  );
};
