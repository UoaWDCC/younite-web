import styles from "./footer.module.css";
import Image from "next/image";
// socials
import facebookLogo from "@/assets/facebookLogo.svg";
import instagramLogo from "@/assets/instagramLogo.svg";
import tiktokLogo from "@/assets/tiktokLogo.svg";
import linkTreeLogo from "@/assets/linkTreeLogo.svg";
// brands
import youthVoiceLogo from "@/assets/youthVoiceLogo.png";
import lakeHouseLogo from "@/assets/lakeHouseLogo.png";
import localBoardLogo from "@/assets/localBoardLogo.png";

export default function Footer() {
  return <footer className={styles.footer}>
    <div className={styles.top}>
      <Image height={4 * 16} src={youthVoiceLogo} className={styles.brandLogo} alt="" />
      <Image height={4 * 16} src={localBoardLogo} className={styles.brandLogo} alt="" />
      <Image height={4 * 16} src={lakeHouseLogo} className={styles.brandLogo} alt="" />
    </div>
    <div className={styles.bottom}>
      <div className={styles.socialsContainer}>
        <Image height={32} src={facebookLogo} className={styles.socialLogo} alt="" />
        <Image height={32} src={instagramLogo} className={styles.socialLogo} alt="" />
        <Image height={32} src={tiktokLogo} className={styles.socialLogo} alt="" />
        <Image height={32} src={linkTreeLogo} className={styles.socialLogo} alt="" />

      </div>
      <span>©Younite</span>
      <span>Credits & Privacy</span>

    </div>


  </footer>
}