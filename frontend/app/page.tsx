import CarouselBase from "@/components/CarouselBase";
import HomePageBlob from "@/components/HomePageBlob/HomePageBlob";
import ImageWithText from "@/components/blocks/ImageWithText";
import Footer from "@/components/footer/footer";
import BGWaves from "@/components/svg/BGWaves";
import { z } from "zod";
import Header from "../components/header/header";
import styles from "./page.module.css";

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
		<main className={`${styles.main} bg-gradient-1 isolate`}>
			<BGWaves className="w-full absolute -z-50 top-[85vh]" />
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
			<HomePageBlob blob1={data.blob1} blob2={data.blob2} blob3={data.blob3} />
			{/* <FeedbackForm /> */}

			<ImageWithText props={data.textWithImage} />
			<div>
				<div className="bg-white bg-opacity-50">
					<div className="overflow-hidden ml-20 mr-20 ">
						<CarouselBase
							wrapperClass="flex pt-24 pb-40 w-full m-0"
							innerClass="gap-8"
						>
							{Array.from({ length: 5 }).map((_, i) => (
								<div
									key={i}
									className="w-60 h-64 rounded-xl text-blue-800 overflow-hidden"
								>
									<div className='h-48 bg-cover bg-[url("../assets/event1.png")]'></div>
									<div className="h-16" style={{ backgroundColor: "white" }}>
										<div className="pl-3 pt-1.5 font-semibold text-lg">
											Rainbow High Tea
										</div>
										<div className="pl-3 text-base">3rd May 2023</div>
									</div>
								</div>
							))}
						</CarouselBase>
					</div>
				</div>
			</div>
			<Footer />
		</main>
	);
}
