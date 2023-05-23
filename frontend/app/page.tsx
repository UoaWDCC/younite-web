import { Inter } from "next/font/google";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header/header";

const inter = Inter({ subsets: ["latin"] });

async function getData() {
	const res = await fetch("http://localhost:1337/api/project-pages", {
		headers: {
			authorization: "Bearer " + process.env.STRAPI_KEY,
		},
		cache: "no-cache",
	});

	const json = await res.json();
	return json.data;
}


export default async function Home() {
	const data = await getData();

	console.log(data);

	return (
		<main className={styles.main}>
			<Header />
			<div className={styles.description}>
				<p>
					{JSON.stringify(data)}
					<code className={styles.code}>app/page.tsx</code>
				</p>
				<div>
					<a
						href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer"
					>
						By{" "}
						<Image
							src="/vercel.svg"
							alt="Vercel Logo"
							className={styles.vercelLogo}
							width={100}
							height={24}
							priority
						/>
					</a>
				</div>
			</div>

			<div className={styles.center}>
				<Image
					className={styles.logo}
					src="/next.svg"
					alt="Next.js Logo"
					width={180}
					height={37}
					priority
				/>
				<div className={styles.thirteen}>
					<Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
				</div>
			</div>

			<div className={styles.grid}>
				<a
					href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					className={styles.card}
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className={inter.className}>
						Docs <span>-&gt;</span>
					</h2>
					<p className={inter.className}>
						Find in-depth information about Next.js features and API.
					</p>
				</a>

				<a
					href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					className={styles.card}
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className={inter.className}>
						Templates <span>-&gt;</span>
					</h2>
					<p className={inter.className}>Explore the Next.js 13 playground.</p>
				</a>

				<a
					href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					className={styles.card}
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className={inter.className}>
						Deploy <span>-&gt;</span>
					</h2>
					<p className={inter.className}>
						Instantly deploy your Next.js site to a shareable URL with Vercel.
					</p>
				</a>
			</div>
		</main>
	);
}
