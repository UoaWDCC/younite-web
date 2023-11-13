import { getLargestImage } from "@/shared/util";
import Link from "next/link";
import { z } from "zod";
import styles from "./header.module.css";

async function getHeaderData() {
	const headerRes = await fetch(`http://localhost:1337/api/header?populate=*`, {
		headers: {
			authorization: "Bearer " + process.env.STRAPI_KEY,
		},
		cache: "no-cache",
	});

	const json = await headerRes.json();
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

	const membersRes = await fetch(`http://localhost:1337/api/member-teams`, {
		headers: {
			authorization: "Bearer " + process.env.STRAPI_KEY,
		},
		cache: "no-cache",
	});

	const json2 = await membersRes.json();
	const data = json2.data
		.map((p: any) => p.attributes)
		.sort((a: any, b: any) => a.CommitteeYear - b.CommitteeYear);

	const resData = schema.parse(attributes);

	return {
		...resData,
		members: data,
	};
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
				<Link
					className="group relative"
					href={`/members/${data.members[0].CommitteeYear}`}
					prefetch
				>
					<span>MEMBERS</span>
					<div className="group-hover:flex hidden absolute top-full bg-white p-2 rounded-md items-center text-b-dark-blue">
						{/* @ts-ignore */}
						{data.members.map(({ CommitteeYear }) => (
							<Link
								href={`/members/${CommitteeYear}`}
								key={CommitteeYear}
								prefetch
							>
								{CommitteeYear}
							</Link>
						))}
					</div>
				</Link>

				{links.map((link) => (
					<Link href={link.slug} key={link.title} prefetch>
						{link.title.toLocaleUpperCase()}
					</Link>
				))}
			</nav>
		</header>
	);
}
