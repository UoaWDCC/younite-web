import Image from "next/image";
import Link from "next/link";
import Logo from "../younitelogo.png";
import styles from "./header.module.css";
import { z } from "zod";


async function getHeaderData() {
	const res = await fetch(
		`http://localhost:1337/api/header?populate=*`,
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
		Logo: z.any(),
    	Links: z.array(
			z.object({
				slug: z.string(),
				title: z.string() })),
	});

	return schema.parse(attributes);		
}


export default async function Header() {
	const data = await getHeaderData();

	console.log(data);

	//const logoVar = data.Logo.data.attributes.formats.large.url;
	//const linksSlug = data.Links[0].slug;
	//const linksTitle = data.Links[0].title;

	return (
		<header className={styles.header}>
			<Link href="/">
				{/* multiply by 16 for rem */}
				<Image src={data.Logo.url} alt="Younite Logo" height={8 * 16} priority />
			</Link>
			<nav className={styles.nav}>
				<Link href="/about-us">ABOUT US</Link>
				<Link href="/blog">BLOG</Link>
				<Link href="/members">MEMBERS</Link>
				<Link href="/collaborations">COLLABORATIONS</Link>
				<Link href="/signup">SIGN UP</Link>
			</nav>
		</header>
	);
}



// export default async function Header({ params }: { params: { slug: string } }) {
// 	const data = await getHeaderData(params.slug);

// 	return (
// 		<header className={styles.header}>
// 			<Link href="/">
// 				{/* multiply by 16 for rem */}
// 				<Image src={logo} alt="Younite Logo" height={8 * 16} priority />
// 			</Link>
// 			<nav className={styles.nav}>
// 				<Link href="/about-us">ABOUT US</Link>
// 				<Link href="/blog">BLOG</Link>
// 				<Link href="/members">MEMBERS</Link>
// 				<Link href="/collaborations">COLLABORATIONS</Link>
// 				<Link href="/signup">SIGN UP</Link>
// 			</nav>
// 		</header>
// 	);
// }
