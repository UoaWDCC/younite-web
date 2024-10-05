"use client";
// Adapted from https://usehooks.com/uselockbodyscroll
// Source: https://github.com/uidotdev/usehooks/blob/main/index.js (useLockBodyScroll)

import { ReactNode, useState } from "react";

type OverFlowOptions =
  | "visible"
  | "hidden"
  | "scroll"
  | "auto"
  | "initial"
  | "inherit";

export function BodyScrollLocker({ children }: { children: ReactNode }) {
  const [originalStyle, setOriginalStyle] = useState<OverFlowOptions | null>(
    null,
  ); // null means not hovering over the element

  console.log("Original:", originalStyle);
  console.log("Current:", getBodyOverflow());

  function lockBodyScroll() {
    if (originalStyle !== null) return;
    setOriginalStyle(getBodyOverflow());
    setBodyOverflow("hidden");
  }

  function unlockBodyScroll() {
    if (originalStyle === null) return;
    setBodyOverflow(originalStyle);
    setOriginalStyle(null);
  }

  return (
    <div onMouseEnter={lockBodyScroll} onMouseLeave={unlockBodyScroll}>
      {children}
    </div>
  );
}

function getBodyOverflow() {
  return window.getComputedStyle(document.body).overflow as OverFlowOptions;
}

function setBodyOverflow(value: OverFlowOptions) {
  document.body.style.overflow = value;
}
