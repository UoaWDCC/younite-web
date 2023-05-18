import Image from "next/image";
import Link from "next/link";
import logo from "public/younitelogo.png";
import styles from "./header.module.css";

export default function Header() {
	return (
		<header className={styles.header}>
			<Link href="/">
				<Image src={logo} alt="Younite Logo" width={110} priority />
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
