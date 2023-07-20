import styles from "@/app/page.module.css";
import Header from "@/components/header/header";
import Link from "next/link";
import { z } from "zod";
import { projectSchema } from "./schemas";

async function getData() {
	const res = await fetch(
		`http://localhost:1337/api/project-pages?populate[blocks][populate]=*`,
		{
			headers: {
				authorization: "Bearer " + process.env.STRAPI_KEY,
			},
			cache: "no-cache",
		}
	);

	const json = await res.json();
	// each project comes with metadata so we need to take the attributes
	const data = json.data.map((p: any) => p.attributes);

	const schema = z.array(projectSchema);

	return schema.parse(data);
}

export default async function Home() {
	const data = await getData();

	return (
		<main className={styles.main}>
			<Header />
			<div>
				{data.map((p) => (
					<div key={p.slug}>
						<Link href={`/projects/${p.slug}`}>{p.title}</Link>
					</div>
				))}
			</div>
		</main>
	);
}
