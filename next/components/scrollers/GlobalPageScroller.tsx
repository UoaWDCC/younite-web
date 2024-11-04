"use client";

import { ReactNode, useCallback, useEffect, useRef } from "react";
import { useBodyLock } from "./ScrollContextProvider";

// This is the div that goes in layout.tsx
// The only reason this is a separate component is to use "use client" so it can be dynamically scroll-locked
export function GlobalPageScroller({ children }: { children: ReactNode }) {
  const { isBodyScrollLocked } = useBodyLock();
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(
    (event: Event) => {
      if (isBodyScrollLocked) {
        event.preventDefault();
      }
    },
    [isBodyScrollLocked],
  );

  // Equivalent to onWheel={handleScroll} but allows 'passive: false' which is necessary to preventDefault() on wheel events
  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;
    scrollElement.addEventListener("wheel", handleScroll, { passive: false });
    return () => {
      scrollElement.removeEventListener("wheel", handleScroll);
    };
  }, [isBodyScrollLocked, handleScroll]);

  return (
    <div
      className="h-full overflow-y-auto disable-scrolling"
      ref={scrollRef}
      // onWheel={handleScroll} // Can't use this because there's no way to set passive: false
    >
      <div className="bg-gradient-1 isolate flex flex-col min-h-svh">
        {children}
      </div>
    </div>
  );
}
