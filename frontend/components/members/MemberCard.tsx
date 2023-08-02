import Image from "next/image";
import styles from "./MemberCard.module.css";


export default function MemberCard({ name, imgSrc } : { name: string, imgSrc: string}) {
    return(
        <div style={{ display: "grid", gridTemplateRows: "2fr 1fr", border: "solid"}}>
            <div>
                <Image fill={true} src={imgSrc} className={styles.image} alt="" />
            </div>
            <div className="bg-white">
                 <p>
                    Name
                </p>
            </div>
        </div>
    )
}
