"use client";
import useEmblaCarousel from "embla-carousel-react";
import React, {useCallback} from 'react'

export default function CarouselBase({
	children,
	wrapperClass,
	innerClass,
}: React.PropsWithChildren<{ wrapperClass?: string; innerClass?: string }>) {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		skipSnaps: true,
		align: "start",
	})
	
	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev()
	  }, [emblaApi])
	
	  const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext()
	  }, [emblaApi]);

	return (
		<div>		
			<div className="text-blue-800 font-semibold text-4xl pl-20 pr-20 pt-28 bg-white bg-opacity-50 flex flex-row justify-between">
				<p>
					Upcoming Events
				</p>
				<div>
					<button onClick={scrollPrev}>
						back
					</button>	
					<button onClick={scrollNext}>
						forward
					</button>				
				</div>
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
