import { useContext } from "react";
import { myInfo } from "../../assets/data";
import { SectionContext } from "../../context/SectionContext";
import { AnimatedBox } from "./AnimatedBox";
import { FcAbout } from "react-icons/fc";

export const AnimatedImageAboutBox = () => {
  const { activeSection } = useContext(SectionContext);

  return (
    <AnimatedBox
      className="col-span-4 row-span-4 p-0 overflow-hidden"
      sectionAnimated
    >
      {activeSection === "about" ? (
        <div className="p-8">
          <h2 className="text-4xl font-medium leading-tight flex items-center gap-3">
            <FcAbout className="size-8 text-zinc-400" /> About Me
          </h2>
          <p className="text-zinc-300 text-center">{myInfo.about_me}</p>
        </div>
      ) : (
        <img
          src={myInfo.image}
          alt="A photo of me"
          className="w-full h-full object-cover"
        />
      )}
    </AnimatedBox>
  );
};
