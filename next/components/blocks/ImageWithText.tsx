import { getLargestImageUrl } from "@/util/image";
import styles from "./ImageWithText.module.css";

export default function ImageWithText({ props }: { props: any }) {
  const imageUrl = getLargestImageUrl(props.image);

  return (
    <div className="grid grid-cols-2 max-h-[80vh]">
      <div className="flex">
        <img className={styles.backgroundImg} src={imageUrl} />
      </div>
      <div className={styles.backgroundDots}>
        <div className={styles.backgroundCol}>
          <div className={styles.heading}>{props.Heading}</div>
          <hr className={styles.Underline}></hr>
          <div className={styles.content}>{props.content}</div>
        </div>
      </div>
    </div>
  );
}
