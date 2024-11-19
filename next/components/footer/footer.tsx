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
  const { topFooter, logoSection, younite, CreditsPrivacy } = data;
  const brands = data.topFooter;
  const links = data.logoSection;

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
      {brands.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              height={4 * 16}
              width={100}
              src={getLargestImageUrl(item.image)}
              className={styles.brandLogo}
              alt=""
            />
          </a>
        ))}
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
