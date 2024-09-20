import React from "react";
import { useModal } from "./ModalContextProvider";

export default function Modal() {

  const { isOpen, content, close } = useModal();

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 animate-popUp backdrop-blur-md">
      <div className="bg-gray-600 p-6 rounded-lg shadow-lg relative">
        <button
          onClick={close}
          className="absolute top-2 right-2 text-white hover:text-gray-800"
        >
          &times;
        </button>
        {content}
      </div>
    </div>
  );
}
