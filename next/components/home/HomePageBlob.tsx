import RichText from "../blocks/RichText";
import Blob from "./Blob";
import ConnectorBlob from "./ConnectorBlob";
import styles from "./HomePageBlob.module.css";

type Props = {
  blob1: string;
  blob2: string;
  blob3: string;
};

export default function HomePageBlobs({ blob1, blob2, blob3 }: Props) {
  return (
    <div
      className={`${styles.container} grid grid-cols-14 my-24 p-5 drop-shadow-xl`}
    >
      <Blob className="bg-white col-start-8 col-span-4">{blob1}</Blob>
      <ConnectorBlob className="col-start-10 col-end-12 justify-self-center" />
      <Blob className="bg-white col-start-10 col-span-4">
        <RichText props={{ text: blob2 }} />
        <button className={styles.button}>JOIN US NOW</button>
      </Blob>
      <Blob className="bg-[#ffaa00] text-black row-start-4 col-start-2 col-span-4">{blob3}</Blob>
    </div>
  );
}
