"use client";
import { createContext, ReactNode, useContext, useState } from "react";

type ScrollContextType = {
  isBodyScrollLocked: boolean;
  lockBodyScroll: () => void;
  unlockBodyScroll: () => void;
};

// Placeholder values
const ScrollContext = createContext<ScrollContextType>({
  isBodyScrollLocked: false,
  lockBodyScroll: () => {},
  unlockBodyScroll: () => {},
});

// Custom hook - returns { isBodyScrollLocked, lockBodyScroll, unLockBodyScroll } at the current time
export const useBodyLock = () => useContext(ScrollContext);

type ScrollProviderProps = {
  children: ReactNode;
};

// This 'component' goes in the layout so its context (fancy state) is available everywhere
export const ScrollContextProvider = ({ children }: ScrollProviderProps) => {
  const [isBodyScrollLocked, setIsBodyScrollLocked] = useState<boolean>(false);

  function lockBodyScroll() {
    setIsBodyScrollLocked(true);
  }

  function unlockBodyScroll() {
    setIsBodyScrollLocked(false);
  }

  // value is the context object accessed by useBodyScroll()
  return (
    <ScrollContext.Provider
      value={{ isBodyScrollLocked, lockBodyScroll, unlockBodyScroll }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollContextProvider;
