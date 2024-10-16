import Image from "next/image";
import styles from "./footer.module.css";
import fetchStrapi from "@/util/strapi";
import { footerSchema } from "@/schemas/single/Footer";
import { z } from "zod";
// socials
import facebookLogo from "@/assets/footer/facebookLogo.svg";
import instagramLogo from "@/assets/footer/instagramLogo.svg";
import linkTreeLogo from "@/assets/footer/linkTreeLogo.svg";
import tiktokLogo from "@/assets/footer/tiktokLogo.svg";
// brands
import lakeHouseLogo from "@/assets/footer/lakeHouseLogo.png";
import localBoardLogo from "@/assets/footer/localBoardLogo.png";
import shoreJunctionLogo from "@/assets/footer/shoreJunction.png";

async function getFooterData() {
  const resData = await fetchStrapi("footer", footerSchema);
  return resData;
}

export default async function Footer() {
  const data = await getFooterData();
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <a
          href="https://www.aucklandcouncil.govt.nz/about-auckland-council/how-auckland-council-works/local-boards/all-local-boards/devonport-takapuna-local-board/Pages/default.aspx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            height={4 * 16}
            src={localBoardLogo}
            className={styles.brandLogo}
            alt=""
          />
        </a>
        <a
          href="https://shorejunction.nz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            height={4 * 16}
            src={shoreJunctionLogo}
            className={styles.brandLogo}
            alt=""
          />
        </a>
        <a
          href="https://lakehousearts.org.nz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            height={4 * 16}
            src={lakeHouseLogo}
            className={styles.brandLogo}
            alt=""
          />
        </a>
      </div>
      <div className={styles.bottom}>
        <div className={styles.socialsContainer}>
          <a
            href="https://www.facebook.com/younitedt/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              height={32}
              src={facebookLogo}
              className={styles.socialLogo}
              alt=""
            />
          </a>
          <a
            href="https://www.instagram.com/younitedt/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              height={32}
              src={instagramLogo}
              className={styles.socialLogo}
              alt=""
            />
          </a>
          <a
            href="https://www.tiktok.com/@y0un1te"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              height={32}
              src={tiktokLogo}
              className={styles.socialLogo}
              alt=""
            />
          </a>
          <a
            href="https://linktr.ee/younitedt?utm_source=linktree_profile_share&ltsid=f50e90c4-8dee-4350-8645-fe0822773924"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              height={32}
              src={linkTreeLogo}
              className={styles.socialLogo}
              alt=""
            />
          </a>
        </div>
        <span>©Younite</span>
        <span>Credits & Privacy</span>
      </div>
    </footer>
  );
}
