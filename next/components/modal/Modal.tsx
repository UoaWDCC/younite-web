"use client";

import { useModal } from "./ModalContextProvider";

export default function Modal() {
  const { isOpen, content, close } = useModal();

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 animate-popUp backdrop-blur-md z-50"
      onClick={close}
    >
      <div
        className="rounded-lg overflow-hidden w-[27rem] relative shadow-lg border-[12px] border-slate-200 hover:border-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButton onClick={close} />
        {content}
      </div>
    </div>
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