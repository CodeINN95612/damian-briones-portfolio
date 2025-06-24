import { motion } from "framer-motion";
import { AnimatedBox } from "./AnimatedBox";
import { myInfo } from "../../assets/data";

export const AnimatedHobbiesBox = () => {
  return (
    <AnimatedBox className="col-span-5 row-span-2 grid grid-cols-4 gap-4">
      <div className="col-span-2 flex items-center justify-center">
        <motion.h3 whileHover={{ scale: 1.1 }} className="font-bold text-xl">
          HOBBIES
        </motion.h3>
      </div>
      {myInfo.about_me.hobbies.map((hobbie) => (
        <div
          className="col-span-2 flex items-center justify-center gap-2 hover:bg-zinc-700 p-2 rounded"
          key={hobbie.name}
        >
          {hobbie.icon}
          {hobbie.name}
        </div>
      ))}
    </AnimatedBox>
  );
};
