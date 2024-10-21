import { motion } from "framer-motion";
import { X } from "lucide-react";
import { PropsWithChildren } from "react";

export type ContentModalProps = {
  setTab: (tab: React.ReactNode | null) => void;
} & PropsWithChildren;

export function ContentModal({ children, setTab }: ContentModalProps) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
        onClick={() => setTab(null)}
        className="fixed inset-0 bg-black z-20"
      />

      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed inset-x-1 md:inset-x-24 bottom-0 h-[90%] bg-zinc-800 rounded-t-xl shadow-xl z-30 pb-5"
      >
        <div className="h-full pt-8 md:p-8 relative">
          <button
            onClick={() => setTab(null)}
            className="absolute top-4 right-4 p-2 hover:bg-zinc-700 rounded-full transition-colors z-40"
          >
            <X size={24} />
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-10 px-2 md:px-10 overflow-y-auto h-full pb-48"
          >
            {children}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
