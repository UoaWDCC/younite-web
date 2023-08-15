import ScribbleLeft from "@/assets/members/scribble-left.png";
import ScribbleRight from "@/assets/members/scribble-right.png";
import RichText from "@/components/blocks/RichText";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Image from "next/image";
import MembersBanner from "../../assets/membersbanner.jpg";
import Chairman from "./Chairman";
import Teams from "./Teams";
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

				<div className="relative w-full grid place-items-center isolate">
					<Image className="w-full max-w-5xl" src={MembersBanner} alt="" />
					<div className="absolute bottom-8 right-12 p-8 pr-16 max-w-lg bg-white shadow-lg rounded-3xl text-b-dark-blue __markdown">
						<RichText
							props={{
								text: "# Meet the 2023 YOUNITE Team!\n\nA group of young people eager to enact positive change in the Devonport-Takapuna community. Believing in youth voices and youth leadership.",
							}}
						/>
						<button className="bg-b-blue px-5 py-3 rounded-full font-bold mt-8">
							MEET THE TEAM
						</button>
					</div>
					<Image
						className="absolute bottom-0 left-0"
						src={ScribbleLeft}
						alt=""
					/>
					<Image
						className="absolute top-0 right-0 -translate-y-12 -z-10"
						src={ScribbleRight}
						alt=""
					/>
				</div>
			</div>
			{/* adjust minimum height of components */}
			<Chairman className="bg-blue-500 p-4 flex items-center justify-center h-[500px] min-h-[500px]" />
			<Teams className="bg-green-500 p-6 flex items-center justify-center h-[500px] min-h-[500px]" />
			<Footer />
		</main>
	);
}
