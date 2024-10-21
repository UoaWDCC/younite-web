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
      className={`${styles.container} md:grid md:grid-cols-14 my-24 p-5 drop-shadow-xl`}
    >
      <Blob className="bg-white md:col-start-8 mr-10 md:mr-0 block md:inline col-span-4">
        {blob1}
      </Blob>
      <ConnectorBlob className="md:col-start-10 md:col-end-12 justify-self-center md:ml-0 ml-20 md:block" />
      <Blob className="bg-white md:col-start-10 md:ml-0 block md:inline ml-10 md:mt-0 col-span-4">
        <RichText text={blob2} />
        <button className="bg-[#92E0FE] rounded-full py-2 px-12 font-bold">
          JOIN US NOW
        </button>
      </Blob>
      <Blob className="bg-[#ffaa00] row-start-4 mt-10 md:mt-0 col-start-2 col-span-4">
        <RichText text={blob3} />
      </Blob>
    </div>
  );
}
