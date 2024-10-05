"use client";
import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback } from "react";
import ScrollButtons from "./ScrollButtons";

export default function CarouselBase({
  children,
  wrapperClass,
  innerClass,
}: React.PropsWithChildren<{ wrapperClass?: string; innerClass?: string }>) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    skipSnaps: true,
    align: "start",
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div>
      <div className="text-blue-800 font-semibold text-4xl pr-6 pt-28 flex flex-col sm:flex-row justify-between">
        <p className="text-center sm:text-left sm:mb-0 mb-5">Upcoming Events</p>
        <ScrollButtons scrollPrev={scrollPrev} scrollNext={scrollNext} />
      </div>
      <div className={`overflow-hidden ${wrapperClass}`} ref={emblaRef}>
        <div
          className={`flex gap-gutter cursor-grab active:cursor-grabbing ${innerClass}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
