import { AnimatePresence, motion } from "framer-motion";

export type AnimatedModalProps = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  children?: React.ReactNode;
};

export const AnimatedModal = (props: AnimatedModalProps) => {
  return (
    <AnimatePresence>
      {props.visible ? <Modal {...props} /> : null}
    </AnimatePresence>
  );
};

const Modal = ({
  setVisible,
  children,
}: Exclude<AnimatedModalProps, "visible">) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
        onClick={() => setVisible(false)}
        className="fixed inset-0 bg-black z-20"
      />

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed max-w-[80%] right-0 top-0 bottom-0 bg-zinc-800 shadow-xl z-30"
      >
        {children}
      </motion.div>
    </>
  );
};
