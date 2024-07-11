import styles from "@/app/page.module.css";
import ContentBlock from "@/components/ContentBlock";
import Header from "@/components/header/header";
import { apiURL } from "@/shared/util";
import { projectSchema } from "../schemas";

async function getData(slug: string) {
	const res = await fetch(
		`${apiURL}/api/project-pages?filters[slug][$eq]=${slug}&populate[blocks][populate]=*`,
		{
			headers: {
				authorization: "Bearer " + process.env.STRAPI_KEY,
			},
			cache: "no-cache",
		}
	);

	const json = await res.json();
	const attributes = json.data[0].attributes;

	return projectSchema.parse(attributes);
}

export default async function Home({ params }: { params: { slug: string } }) {
	const data = await getData(params.slug);

	return (
		<main className={styles.main}>
			{/* @ts-ignore */}
			<Header />
			<div>
				{data.blocks.map((block: any) => ContentBlock({ props: block }))}
			</div>
		</main>
	);
}
