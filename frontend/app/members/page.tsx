import RichText from "@/components/blocks/RichText";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Image from "next/image";
import MembersBanner from "../../assets/membersbanner.jpg";
import styles from "./page.module.css";

// async function getData() {
// 	const res = await fetch(
// 		`http://localhost:1337/api/home-page?populate[textWithImage][populate]=*`,
// 		{
// 			headers: {
// 				authorization: "Bearer " + process.env.STRAPI_KEY,
// 			},
// 			cache: "no-cache",
// 		}
// 	);

// 	const json = await res.json();
// 	const attributes = json.data.attributes;

// 	const schema = z.object({
// 		heroParagraph: z.string(),
// 		blob1: z.string(),
// 		blob2: z.string(),
// 		blob3: z.string(),
// 		textWithImage: z.any(),
// 	});

// 	return schema.parse(attributes);
// }

export default async function Home() {
	// const data = await getData();

	return (
		<main className={`${styles.main} bg-gradient-1 isolate min-h-full`}>
			<Header />
			<div className="flex flex-col items-center justify-center gap-6">
				<h1 className="uppercase flex flex-col items-center mx-auto mt-12 mb-24">
					<span className="text-6xl leading-[0.95]">Meet the</span>
					<span className="text-8xl font-bold leading-[0.95]">2023 Team</span>
				</h1>

				<div className="relative w-full max-w-6xl grid place-items-center">
					<Image className="w-full max-w-5xl" src={MembersBanner} alt="" />
					<div className="absolute bottom-8 right-0 p-16 max-w-lg bg-white shadow-lg rounded-3xl text-b-dark-blue __markdown">
						<RichText
							props={{
								text: "# Meet the 2023 YOUNITE Team!\n\nA group of young people eager to enact positive change in the Devonport-Takapuna community. Believing in youth voices and youth leadership.",
							}}
						/>
						<button className="bg-b-blue px-5 py-3 rounded-full font-bold">
							JOIN US NOW
						</button>
					</div>
				</div>
			</div>
			<Footer />
		</main>
	);
}
