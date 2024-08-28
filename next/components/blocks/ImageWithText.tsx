import { ImageType } from "@/schemas/Image";
import { getLargestImageUrl } from "@/util/image";
import Image from "next/image";
import styles from "./ImageWithText.module.css";

type ImageWithTextProps = {
  props: {
    image: ImageType;
    Heading: string;
    content: string;
  };
};

export default function ImageWithText({ props }: ImageWithTextProps) {
  const imageUrl = getLargestImageUrl(props.image);

  return (
    <div className="grid grid-cols-2 max-h-[80vh]">
      <div className="flex">
        <Image
          className={styles.backgroundImg}
          src={imageUrl}
          alt={props.Heading}
          width={500}
          height={500}
        />
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
