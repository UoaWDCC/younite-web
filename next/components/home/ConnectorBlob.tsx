import connector from "@/assets/home/connector.svg";
import Image from "next/image";

export default function ConnectorBlob() {
  return (
    <Image
      draggable={false}
      // className={styles.connector}
      src={connector}
      alt=""
      width={60}
      height={32}
    />
  );
}
