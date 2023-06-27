import styles from "@/app/page.module.css";
import ContentBlock from "@/components/ContentBlock";
import Header from "@/components/header/header";
import { z } from "zod";

async function getData(slug: string) {
	const res = await fetch(
		`http://localhost:1337/api/project-pages?filters[slug][$eq]=${slug}&populate[blocks][populate]=*`,
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
		slug: z.string(),
		title: z.string(),
		image: z.any(),
		blocks: z.array(z.any()),
	});

	return schema.parse(attributes);
}

export default async function Home({ params }: { params: { slug: string } }) {
	const data = await getData(params.slug);

	return (
		<main className={styles.main}>
			<Header />
			<div>
				{data.blocks.map((block: any) => ContentBlock({ props: block }))}
			</div>
		</main>
	);
}
