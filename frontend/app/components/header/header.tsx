import { Inter } from "next/font/google";
import Image from "next/image";
import logo from "public/younitelogo.png";
import styles from "./header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
              src= {logo}
              alt="Younite Logo"
              width={110}
              priority
            />
      </Link>
      <div className={styles.nav}>
        <Link href="about-us">ABOUT US</Link>
        <Link href="#">BLOG</Link>
        <Link href="#">MEMBERS</Link>
        <Link href="#">COLLABORATIONS</Link>
        <Link href="#">SIGN UP</Link>
      </div>
    </header>
  );
}