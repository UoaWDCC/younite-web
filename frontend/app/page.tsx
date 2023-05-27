import CarouselBase from "@/components/CarouselBase";
import BGWaves from "@/components/svg/BGWaves";
import Header from "../components/header/header";
import styles from "./page.module.css";

export default async function Home() {
	return (
		<main className={`${styles.main} bg-gradient-1`}>
			<Header />
			<div className="min-h-[55vh] flex flex-col items-center justify-center gap-6">
				<h1 className="uppercase flex flex-col items-center mx-auto">
					<span className="text-6xl leading-[0.95]">A Youth Board</span>
					<span className="text-8xl font-bold leading-[0.95]">
						For The Future
					</span>
				</h1>
				<p className="text-lg max-w-[50ch] text-center mb-16 leading-relaxed">
					A group of young people eager to enact positive change in the
					Devonport-Takapuna community. Believing in youth voices and youth
					leadership.
				</p>
			</div>
			<BGWaves className="w-full" />
			<CarouselBase
				wrapperClass="pl-gutter py-40 bg-white bg-opacity-50"
				innerClass="gap-8"
			>
				<div className="w-80 bg-red-400 p-8">Slide 1</div>
				<div className="w-80 bg-red-400 p-8">Slide 2</div>
				<div className="w-80 bg-red-400 p-8">Slide 3</div>
			</CarouselBase>
		</main>
	);
}
