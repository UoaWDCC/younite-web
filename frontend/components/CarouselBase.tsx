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
					<button className="pr-5"onClick={scrollPrev}>
						<svg fill="#1E40AF" height="40" width="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
							<path d="M256 0C114.623 0 0 114.616 0 256s114.623 256 256 256c141.391 0 256-114.616 256-256S397.391 0 256 0zm122.268 287.116c0 8.666-7.028 15.68-15.68 15.68h-89.334l10.898 46.623c1 4.312-.71 8.798-4.332 11.348a10.842 10.842 0 0 1-12.131.24l-131.913-95.225a12.073 12.073 0 0 1 0-19.566l131.913-95.231a10.84 10.84 0 0 1 12.131.246 10.868 10.868 0 0 1 4.332 11.348l-10.898 46.623h89.334c8.652 0 15.68 7.014 15.68 15.68v62.234z"/>
						</svg>
					</button>	
					<button onClick={scrollNext}>
						<svg fill="#1E40AF" height="40" width="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
							<path  d="M16 0C7.164 0 0 7.164 0 16s7.164 16 16 16 16-7.164 16-16S24.836 0 16 0zm.031 24v-6H8v-4h8.031V8.031L24 16l-7.969 8z"/>
						</svg>
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
