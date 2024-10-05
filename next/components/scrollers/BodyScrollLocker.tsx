"use client";

import { ReactNode } from "react";
import { useBodyLock } from "./ScrollContextProvider";

export function BodyScrollLocker({ children }: { children: ReactNode }) {
  const { lockBodyScroll, unlockBodyScroll } = useBodyLock();

  return (
    <div onMouseEnter={lockBodyScroll} onMouseLeave={unlockBodyScroll}>
      {children}
    </div>
  );
}
