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
			<div className="text-blue-800 font-semibold text-4xl pr-6 pt-28 flex flex-row justify-between">
				<p>
					Upcoming Events
				</p>
				<div>
					<button className="-mr-0.5"onClick={scrollPrev}>
						<svg width="77" height="41" viewBox="0 0 77 41" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0.324324 15.5676C0.324324 7.14896 7.14896 0.324324 15.5676 0.324324H76.1707V40.5993H15.5676C7.14897 40.5993 0.324324 33.7746 0.324324 25.356V15.5676Z" stroke="#014788" stroke-width="0.648649"/>
							<path d="M31.6088 25.311L26.4785 19.9856L31.6088 14.6602M27.1911 19.9856H47.3353" stroke="#014788" stroke-width="1.88514" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</button>	
					<button onClick={scrollNext}>
						<svg width="78" height="41" viewBox="0 0 78 41" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M1.23253 0.324324H61.8356C70.2542 0.324324 77.0789 7.14896 77.0789 15.5676V25.356C77.0789 33.7746 70.2542 40.5993 61.8356 40.5993H1.23253V0.324324Z" stroke="#014788" stroke-width="0.648649"/>
							<path d="M45.0494 14.1265L50.1797 19.4519L45.0494 24.7773M49.4671 19.4519L29.3229 19.4519" stroke="#014788" stroke-width="1.88514" stroke-linecap="round" stroke-linejoin="round"/>
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
			<svg width="30" height="62" viewBox="0 0 30 62" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M30 31L-2.02656e-06 61.3109L-2.02656e-06 0.689111L30 31Z" fill="white"/>
			</svg>
	</div>

	);
}
