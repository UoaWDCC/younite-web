import connector from "@/assets/home/connector.svg";
import Image from "next/image";

export default function ConnectorBlob({
  className = "",
}: {
  className?: string;
}) {
  return (
    <Image
      draggable={false}
      className={className}
      src={connector}
      alt=""
      width={60}
      height={32}
    />
  );
}
