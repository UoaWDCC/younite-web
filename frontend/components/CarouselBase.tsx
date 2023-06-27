"use client";
import useEmblaCarousel from "embla-carousel-react";

export default function CarouselBase({
	children,
	wrapperClass,
	innerClass,
}: React.PropsWithChildren<{ wrapperClass?: string; innerClass?: string }>) {
	const [emblaRef] = useEmblaCarousel({
		skipSnaps: true,
		align: "start",
	});

	return (
		<div className={`overflow-hidden ${wrapperClass}`} ref={emblaRef}>
			<div
				className={`flex gap-gutter cursor-grab active:cursor-grabbing ${innerClass}`}
			>
				{children}
			</div>
		</div>
	);
}
