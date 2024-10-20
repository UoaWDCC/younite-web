"use client";

import { useModal } from "@/components/modal/ModalContextProvider";

export default function ModalController() {
  const { open } = useModal();

  const handleOpen = () => {
    open(
      <div>
        <h1 className="text-2xl font-bold">Modal Content</h1>
        <p className="mt-4">This is a modal content</p>
      </div>,
    );
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        onClick={handleOpen}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Open Modal
      </button>
    </div>
  );
}
