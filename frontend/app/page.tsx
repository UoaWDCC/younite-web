import CarouselBase from "@/components/CarouselBase";
import ImageWithText from "@/components/blocks/ImageWithText";
import BGWaves from "@/components/svg/BGWaves";
import { z } from "zod";
import Header from "../components/header/header";
import styles from "./page.module.css";
import Footer from "@/components/footer/footer";

async function getData() {
	const res = await fetch(
		`http://localhost:1337/api/home-page?populate[textWithImage][populate]=*`,
		{
			headers: {
				authorization: "Bearer " + process.env.STRAPI_KEY,
			},
			cache: "no-cache",
		}
	);

	const json = await res.json();
	const attributes = json.data.attributes;

	const schema = z.object({
		heroParagraph: z.string(),
		blob1: z.string(),
		blob2: z.string(),
		blob3: z.string(),
		textWithImage: z.any(),
	});

	return schema.parse(attributes);
}

export default async function Home() {
	const data = await getData();

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
					{data.heroParagraph}
				</p>
			</div>
			<BGWaves className="w-full" />

			<ImageWithText props={data.textWithImage} />
			<CarouselBase
				wrapperClass="pl-gutter py-40 bg-white bg-opacity-50"
				innerClass="gap-8"
			>
				<div className="w-80 bg-red-400 p-8">Slide 1</div>
				<div className="w-80 bg-red-400 p-8">Slide 2</div>
				<div className="w-80 bg-red-400 p-8">Slide 3</div>
			</CarouselBase>
      <Footer />
		</main>
	);
}
