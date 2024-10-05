"use client";
import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback } from "react";
import { BodyScrollLocker } from "./BodyScrollLocker";
import ScrollButtons from "./CarouselButtons";

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
        <p className="text-center sm:text-left sm:mb-0 mb-5">Upcoming Events</p>
        <ScrollButtons scrollPrev={scrollPrev} scrollNext={scrollNext} />
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
