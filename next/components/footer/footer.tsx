import { getLargestImageUrl } from "@/util/image";
import { footerSchema } from "@/schemas/single/Footer";
import fetchStrapi from "@/util/strapi";
import Image from "next/image";
import styles from "./footer.module.css";
// socials
// brands
import lakeHouseLogo from "@/assets/footer/lakeHouseLogo.png";
import localBoardLogo from "@/assets/footer/localBoardLogo.png";
import shoreJunctionLogo from "@/assets/footer/shoreJunction.png";
//lost links to socials
async function getFooterData() {
  const resData = await fetchStrapi("footer", footerSchema);
  return resData;
}

export default async function Footer() {
  const data = await getFooterData();
  const { logoSection, younite, CreditsPrivacy } = data;
  const links = data.logoSection;

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
        {links.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              height={32}
              width={32}
              src={getLargestImageUrl(item.image)}
              className={styles.socialLogo}
              alt={item.title}
            />
          </a>
        ))}
        </div>
        <a href={younite.url} target="_blank" rel="noopener noreferrer" className={styles.younite}>
          <span>{younite.title}</span>
        </a>
        <span className={styles.creditsPrivacy}>{CreditsPrivacy}</span>
      </div>
    </footer>
  );
}
