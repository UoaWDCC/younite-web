import Header from "@/app/components/header/header";
import styles from "@/app/page.module.css";

async function getData(slug: string) {
	const res = await fetch(
		`http://localhost:1337/api/project-pages?filters[slug][$eq]=${slug}&populate=*`,
		{
			headers: {
				authorization: "Bearer " + process.env.STRAPI_KEY,
			},
			cache: "no-cache",
		}
	);

	const json = await res.json();
	return json.data[0];
}

export default async function Home({ params }: { params: { slug: string } }) {
	const data = await getData(params.slug);

	return (
		<main className={styles.main}>
			<Header />
			<div
				style={{
					whiteSpace: "pre-wrap",
					maxWidth: 700,
				}}
			>
				{JSON.stringify(data)}
			</div>
		</main>
	);
}
