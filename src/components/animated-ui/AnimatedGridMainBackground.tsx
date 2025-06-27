import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

export const AnimatedGridMainBackground = ({ children }: Props) => {
  return (
    <main className="relative w-screen min-h-screen flex flex-col overflow-hidden items-center justify-center gap-6 bg-zinc-900 text-zinc-50">
      <div className="absolute inset-0 z-0 grid grid-cols-4 opacity-25 sm:grid-cols-8 md:grid-cols-12 lg:grid-cols-16">
        {Array.from({ length: 250 }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ backgroundColor: "#18181B" }}
            whileHover={{ backgroundColor: "#fff" }}
            transition={{
              backgroundColor: {
                type: "spring",
                damping: 100,
                stiffness: 200,
              },
            }}
            className="aspect-square border border-zinc-500"
          ></motion.div>
        ))}
      </div>
      {children}
    </main>
  );
};
