import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

export const AnimatedGridMainBackground = ({ children }: Props) => {
  return (
    <main className="relative w-screen min-h-screen flex flex-col overflow-hidden items-center justify-center gap-6 bg-zinc-900 text-zinc-50 p-6">
      <div className="absolute inset-0 z-0 grid grid-cols-10 opacity-10 sm:grid-cols-15 md:grid-cols-20 lg:grid-cols-25">
        {Array.from({ length: 500 }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ backgroundColor: "#18181B" }}
            whileHover={{ backgroundColor: "#fff" }}
            transition={{
              backgroundColor: {
                type: "spring",
                damping: 80,
                stiffness: 300,
              },
            }}
            className="border border-zinc-100 aspect-square"
          ></motion.div>
        ))}
      </div>

      {children}
    </main>
  );
};
