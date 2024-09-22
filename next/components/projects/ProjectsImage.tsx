import Image from "next/image";
import { useModal } from "../modal/ModalContextProvider";

export default function ImageComponent({
  src,
  alt = "",
  title,
  type,
}: {
  src: string;
  alt?: string;
  title: string;
  type: "current" | "old";
}) {
  const width = type === "current" ? 150 : 100;
  const { open } = useModal();

  function handleClick() {
    open(<div>Temp</div>);
  }

  return (
    <div className={`w-[${width}px] h-[100px] relative`} onClick={handleClick}>
      <div>
        <Image
          src={src}
          alt={alt}
          className="absolute inset-0 -z-10 w-full h-full object-cover brightness-50 rounded-[50px]"
          width={width}
          height={100}
        />
      </div>
      <div>{title}</div>
    </div>
  );
}
