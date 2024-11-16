"use client";

import { ReactNode, UIEvent, useRef } from "react";
import { useBodyLock } from "./ScrollContextProvider";

/**
 * The scrollable div on each page. Works with ScrollContextProvider.
 *
 * This is the div that goes in layout.tsx
 * The only reason this is a separate component is to use "use client" so it can be dynamically scroll-locked
 *
 * @param children The scrollable page content
 */
export function GlobalPageScroller({ children }: { children: ReactNode }) {
  const { isBodyScrollLocked } = useBodyLock();
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollPosition = scrollRef.current?.scrollTop ?? 0;

  function handleScroll(event: UIEvent<HTMLDivElement>) {
    if (isBodyScrollLocked) {
      // Reset the scroll position every time the scroll event is fired (i.e. lock it)
      scrollRef.current?.scrollTo(0, scrollPosition);
    }
  }

  return (
    <div
      className="h-full overflow-y-auto disable-scrolling"
      ref={scrollRef}
      onScroll={handleScroll}
    >
      <div className="bg-gradient-1 isolate flex flex-col min-h-svh">
        {children}
      </div>
    </div>
  );
}
