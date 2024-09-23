"use client";
import { motion } from "framer-motion";
import { useModal } from "./ModalContextProvider";

export default function Modal() {
  const { isOpen, content, close } = useModal();

  if (!isOpen) {
    return null;
  }

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring", bounce: 0, duration: 0.3 }}
      onClick={close}
    >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0, duration: 0.15 }}
        >
          <div
            className="rounded-lg overflow-hidden w-[27rem] relative shadow-lg border-[12px] border-slate-200 hover:border-slate-100"
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton onClick={close} />
            {content}
          </div>
        </motion.div>
    </motion.div>
  );
}

function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute top-4 right-4 text-2xl font-bold text-white hover:text-gray-300 z-20"
    >
      &#x2715; {/* X icon */}
    </button>
  );
}
