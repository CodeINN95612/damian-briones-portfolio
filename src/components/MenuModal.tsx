import { motion } from "framer-motion";
import { MenuBox } from "./menu/MenuBox";

export type MenuModalProps = {
  setIsOpen: (isOpen: boolean) => void;
  setTab: (tab: React.ReactNode | null) => void;
};

export function MenuModal({ setIsOpen, setTab }: MenuModalProps) {
  const onMenuClick = (tab: React.ReactNode | null) => {
    setTab(tab);
    setIsOpen(false);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsOpen(false)}
        className="fixed inset-0 bg-black z-20"
      />

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed w-[90%] right-0 top-0 bottom-0 bg-zinc-800 shadow-xl z-30"
      >
        <nav className="grid h-full grid-cols-3 grid-rows-5">
          <MenuBox setTab={onMenuClick} hideOnSmall />
        </nav>
      </motion.div>
    </>
  );
}
