"use client";
import React, { createContext, useContext, useState } from "react";

type ModalContextType = {
  isOpen: boolean;
  content: React.ReactNode;
  close: () => void;
  open: (content: React.ReactNode) => void;
};

// Placeholder values
const ModalContext = createContext<ModalContextType>({
  isOpen: false,
  content: null,
  close: () => {},
  open: () => {},
});

// Custom hook - returns the modal context
export const useModal = () => useContext(ModalContext);

type ModalProviderProps = {
  children: React.ReactNode;
};

// This 'component' goes in the layout so its context (fancy state) is available everywhere
export const ModalContextProvider = ({ children }: ModalProviderProps) => {
  const [content, setContent] = useState<React.ReactNode>(null);
  const isOpen = content !== null; // Just for convenience

  function close() {
    setContent(null);
  }

  function open(content: React.ReactNode) {
    setContent(content);
  }

  // value is the context object accessed by useModal()
  return (
    <ModalContext.Provider value={{ content, isOpen, close, open }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
