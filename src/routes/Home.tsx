import { AnimatePresence, motion } from "framer-motion";
import { HomeGrid } from "../components/HomeGrid";
import React, { useState } from "react";
import { ContentModal } from "../components/ContentModal";
import { MenuModal } from "../components/MenuModal";

export function Home() {
  const [tab, setTab] = useState<React.ReactNode | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="relative w-screen min-h-screen flex flex-col overflow-hidden items-center justify-center gap-6 bg-zinc-900 text-zinc-50 p-6">
      <HomeGrid
        setTab={setTab}
        setIsMenuOpen={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
      />
      <div className="text-xs">
        <p>
          Made by <span className="italic text-teal-200">Damián Briones</span>{" "}
          2024
        </p>
      </div>
      <div className="absolute inset-0 z-0 grid grid-cols-6 gap-0 opacity-10 md:grid-cols-12">
        {Array.from({ length: 144 }).map((_, index) => (
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

      <AnimatePresence>
        {isMenuOpen && (
          <MenuModal setIsOpen={setIsMenuOpen} setTab={setTab}></MenuModal>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {tab && <ContentModal setTab={setTab}>{tab}</ContentModal>}
      </AnimatePresence>
    </main>
  );
}
