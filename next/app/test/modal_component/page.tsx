"use client";

import { useState } from "react";
import Modal from "@/components/blocks/Modal";

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        onClick={handleOpen}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Open Modal
      </button>

      <Modal isOpen={isModalOpen} onClose={handleClose} />
    </div>
  );
}
