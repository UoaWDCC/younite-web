import styles from "@/app/page.module.css";
import Header from "@/components/header/header";
import { apiURL, getLargestImage } from "@/shared/util";
import Link from "next/link";
import { z } from "zod";
import { projectSchema } from "./schemas";

async function getData() {
	// all project pages
	const res1 = await fetch(`${apiURL}/api/project-pages?populate=*`, {
		headers: {
			authorization: "Bearer " + process.env.STRAPI_KEY,
		},
		cache: "no-cache",
	});

	const json1 = await res1.json();
	// each project comes with metadata so we need to take the attributes
	const data1 = json1.data.map((p: any) => p.attributes);

	const schema = z.array(projectSchema);

	// data for the projects page itself
	const res2 = await fetch(`${apiURL}/api/projects-page?populate=*`, {
		headers: {
			authorization: "Bearer " + process.env.STRAPI_KEY,
		},
		cache: "no-cache",
	});

	const json2 = await res2.json();
	const data2 = json2.data.attributes;

	const schema2 = z.object({
		Subtitle: z.string(),
		BackgroundImage: z.any(),
	});

	return {
		...schema2.parse(data2),
		projects: schema.parse(data1),
	};
}

export default async function Home() {
	const data = await getData();

	return (
		<main className={styles.main}>
			<div className="absolute top-0 w-full z-50">
				{/* @ts-ignore */}
				<Header />
			</div>
			<section className="h-[85vh] flex flex-col items-center justify-center relative">
				<img
					src={getLargestImage(data.BackgroundImage)}
					alt=""
					className="absolute inset-0 -z-10 object-cover w-full h-full brightness-50"
				/>
				<h1 className="uppercase flex flex-col items-center mx-auto mb-6 text-8xl font-bold leading-[0.95]">
					Projects
				</h1>
				<p className="max-w-[55ch] mb-20">{data.Subtitle}</p>
			</section>
			<div>
				{data.projects.map((p) => (
					<div
						key={p.slug}
						className="relative py-40 flex pl-16 pr-16 justify-between items-center"
					>
						<img
							src={getLargestImage(p.image)}
							alt=""
							className="absolute inset-0 -z-10 w-full h-full object-cover brightness-50"
						/>
						<div className="absolute left-8 top-0 h-full w-[1px] bg-white" />

						<span className="bg-white px-6 py-3 rounded-full font-bold text-b-dark-blue h-fit">
							{new Date(p.Date).toLocaleDateString("en-US", {
								day: "numeric",
								month: "long",
								year: "numeric",
							})}
						</span>
						<div className="max-w-[55ch]">
							<Link
								className="font-bold text-5xl mb-6 block"
								href={`/projects/${p.slug}`}
							>
								{p.title}
							</Link>
							<p className="mb-4">{p.Description}</p>
							<Link
								className="ml-auto underline italic block"
								href={`/projects/${p.slug}`}
							>
								Read More
							</Link>
						</div>
					</div>
				))}
			</div>
		</main>
	);
}
