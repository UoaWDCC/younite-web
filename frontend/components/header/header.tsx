import { getLargestImage } from "@/shared/util";
import Link from "next/link";
import { z } from "zod";
import styles from "./header.module.css";

async function getHeaderData() {
	const res = await fetch(`http://localhost:1337/api/header?populate=*`, {
		headers: {
			authorization: "Bearer " + process.env.STRAPI_KEY,
		},
		cache: "no-cache",
	});

	const json = await res.json();
	const attributes = json.data.attributes;

	const schema = z.object({
		Logo: z.any(),
		navigation: z.array(
			z.object({
				slug: z.string(),
				title: z.string(),
			})
		),
	});

	return schema.parse(attributes);
}

export default async function Header() {
	const data = await getHeaderData();

	const logoSrc = getLargestImage(data.Logo);

	const links = data.navigation;

	return (
		<header className={styles.header}>
			<Link href="/">
				<img src={logoSrc} alt="Younite Logo" className="h-32" />
			</Link>
			<nav className={styles.nav}>
				{links.map((link) => (
					<Link href={link.slug} key={link.title}>
						{link.title.toLocaleUpperCase()}
					</Link>
				))}
			</nav>
		</header>
	);
}
