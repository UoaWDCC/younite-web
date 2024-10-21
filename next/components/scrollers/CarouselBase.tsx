"use client";
import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback } from "react";
import { BodyScrollLocker } from "./BodyScrollLocker";
import ScrollButtons from "./CarouselButtons";
import Link from "next/link";

export default function CarouselBase({
  children,
  wrapperClass,
  innerClass,
}: React.PropsWithChildren<{ wrapperClass?: string; innerClass?: string }>) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  function handleScroll(event: React.WheelEvent<HTMLDivElement>) {
    if (!emblaApi) return;
    const scrolledUp = event.deltaY < 0;
    if (scrolledUp) {
      scrollPrev();
    } else {
      scrollNext();
    }
  }

  return (
    <div>
      <div className="text-blue-800 font-semibold text-4xl pr-6 pt-28 flex flex-col sm:flex-row justify-between">
        <p className="text-center text-center md:text-left md:mb-0">Recent Projects</p>
        <Link
        href="projects/active"
        className="text-[14px] px-4 border border-blue-800 rounded-full hover:bg-[#92E0FE] hover:border-[#92E0FE]">
          See More
        </Link>
      </div>
      <BodyScrollLocker>
        <div
          className={`overflow-hidden cursor-grab active:cursor-grabbing ${wrapperClass}`}
          ref={emblaRef}
          onWheel={handleScroll}
        >
          <div className={`flex gap-gutter ${innerClass}`}>{children}</div>
        </div>
      </BodyScrollLocker>
    </div>
  );
}
