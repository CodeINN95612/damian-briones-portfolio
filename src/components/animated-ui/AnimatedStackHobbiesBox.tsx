import { motion, type HTMLMotionProps } from "framer-motion";
import { AnimatedBox } from "./AnimatedBox";
import { twMerge } from "tailwind-merge";
import { SectionContext } from "../../context/SectionContext";
import { useContext } from "react";

export type AnimatedStackHobbiesBoxProps = {
  stack: {
    name: string;
    children: React.ReactNode;
    className: string;
  }[];
  hobbies: {
    name: string;
    icon: React.ReactNode;
  }[];
};

export const AnimatesStackHobbiesBox = ({
  stack,
  hobbies,
}: AnimatedStackHobbiesBoxProps) => {
  const { activeSection } = useContext(SectionContext);
  return (
    <AnimatedBox
      className="col-span-5 row-span-2"
      sectionAnimated
      animatedClassName="grid grid-cols-4 gap-4"
    >
      {activeSection === "about" ? renderHobbies(hobbies) : renderStack(stack)}
      {/* <div className="col-span-2 flex items-center justify-center">
        <motion.h2 whileHover={{ scale: 1.1 }} className="font-bold text-xl">
          TECK STACK
        </motion.h2>
      </div>
      {stack.map((skill) => (
        <StackItem key={skill.name} className={skill.className}>
          {skill.children}
        </StackItem>
      ))} */}
    </AnimatedBox>
  );
};

const renderStack = (stack: AnimatedStackHobbiesBoxProps["stack"]) => {
  return (
    <>
      <div className="col-span-2 flex items-center justify-center">
        <motion.h2 whileHover={{ scale: 1.1 }} className="font-bold text-xl">
          TECK STACK
        </motion.h2>
      </div>
      {stack.map((skill) => (
        <StackItem key={skill.name} className={skill.className}>
          {skill.children}
        </StackItem>
      ))}
    </>
  );
};

type StackItemProps = { className?: string } & HTMLMotionProps<"div">;

const StackItem = ({ className, ...rest }: StackItemProps) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        rotate: Math.random() > 0.5 ? 12 : -12,
        y: -10,
      }}
      className={twMerge(
        "col-span-1 rounded size-full aspect-square flex items-center justify-center bg-zinc-400",
        className
      )}
      {...rest}
    />
  );
};

const renderHobbies = (hobbies: AnimatedStackHobbiesBoxProps["hobbies"]) => {
  return (
    <>
      <div className="col-span-2 flex items-center justify-center">
        <motion.h3 whileHover={{ scale: 1.1 }} className="font-bold text-xl">
          HOBBIES
        </motion.h3>
      </div>
      {hobbies.map((hobbie) => (
        <div
          className="col-span-2 flex items-center justify-center gap-2 hover:bg-zinc-700 p-2 rounded"
          key={hobbie.name}
        >
          {hobbie.icon}
          {hobbie.name}
        </div>
      ))}
    </>
  );
};
