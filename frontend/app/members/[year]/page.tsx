import ScribbleLeft from "@/assets/members/scribble-left.png";
import ScribbleRight from "@/assets/members/scribble-right.png";
import RichText from "@/components/blocks/RichText";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { apiURL, getLargestImage } from "@/shared/util";
import Image from "next/image";
import { z } from "zod";
import Chairman from "./Chairman";
import Teams from "./Teams";

const memberSchema = z.object({
	Name: z.string(),
	Role: z.string(),
	About: z.string(),
	funFact: z.nullable(z.string()),
	Photo: z.any(),
});

const roleSectionSchema = z.object({
	SectionName: z.string(),
	Description: z.string(),
	Members: z.array(memberSchema),
});

export type Member = z.infer<typeof memberSchema>;
export type RoleSection = z.infer<typeof roleSectionSchema>;

async function getData(year: string) {
	const res = await fetch(
		`${apiURL}/api/member-teams?filters[CommitteeYear][$eq]=${year}&populate[Chairs][populate]=*&populate[RoleSection][populate][Members][populate]=*&populate[teamPhoto][populate]=*`,
		{
			headers: {
				authorization: "Bearer " + process.env.STRAPI_KEY,
			},
			cache: "no-cache",
		}
	);

	const json = await res.json();
	const attributes = json.data[0].attributes;

	const schema = z.object({
		description: z.string(),
		teamPhoto: z.any(),
		CommitteeYear: z.number(),
		Chairs: z.array(memberSchema),
		RoleSection: z.array(roleSectionSchema),
	});

	return schema.parse(attributes);
}

export default async function Home({ params }: { params: { year: string } }) {
	const data = await getData(params.year);

	const chairs = data.Chairs;
	const roleSections = data.RoleSection;

	return (
		<main className={`bg-gradient-1 isolate min-h-full`}>
			{/* @ts-ignore */}
			<Header />
			<div className="flex flex-col items-center justify-center gap-6">
				<h1 className="uppercase flex flex-col items-center mx-auto mt-12 mb-24">
					<span className="text-6xl leading-[0.95]">Meet the</span>
					<span className="text-8xl font-bold leading-[0.95]">
						{data.CommitteeYear} Team
					</span>
				</h1>

				<div className="relative w-full grid place-items-center isolate">
					<img
						className="w-full max-w-5xl"
						src={getLargestImage(data.teamPhoto)}
						alt=""
					/>
					<div className="absolute bottom-8 right-12 p-8 pr-16 max-w-lg bg-white shadow-lg rounded-3xl text-b-dark-blue __markdown">
						<RichText
							props={{
								text: data.description,
							}}
						/>
						<a
							className="block mr-auto w-fit bg-b-blue px-5 py-3 rounded-full font-bold mt-8"
							href="#chairs"
						>
							MEET THE TEAM
						</a>
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
			<Chairman chairs={chairs} />
			<Teams teams={roleSections} />
			<Footer />
		</main>
	);
}
