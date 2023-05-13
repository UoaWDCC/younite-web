import { Inter } from "next/font/google";
import Image from "next/image";
import logo from "public/younitelogo.png";
import styles from "./header.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Header() {
  return (
    <header className={styles.header}>
      <Image
            src= {logo}
            alt="Younite Logo"
            className={styles.youniteLogo}
            width={110}
            priority
          />
      <div className={styles.nav}>
        <a href="#">ABOUT US</a>
        <a href="#">BLOG</a>
        <a href="#">MEMBERS</a>
        <a href="#">COLLABORATIONS</a>
        <a href="#">SIGN UP</a>
      </div>
    </header>
  );
}