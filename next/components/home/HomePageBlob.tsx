import RichText from "../blocks/RichText";
import Blob from "./Blob";
import ConnectorBlob from "./ConnectorBlob";
import styles from "./HomePageBlob.module.css";

type Props = {
  blob1: string;
  blob2: string;
  blob3: string;
};

export default function HomePageBlob({ blob1, blob2, blob3 }: Props) {
  return (
    <div className={styles.container}>
      <Blob className={`bg-white ${styles.blob1}`}>{blob1}</Blob>
      <ConnectorBlob />
      <Blob className={`bg-white ${styles.blob2}`}>
        <RichText props={{ text: blob2 }} />
        <button className={styles.button}>JOIN US NOW</button>
      </Blob>
      <Blob className={`bg-[#ffaa00] ${styles.blob3}`}>{blob3}</Blob>
    </div>
  );
}
