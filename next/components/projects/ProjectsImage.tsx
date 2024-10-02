import Image from "next/image";

type ImageComponentProps = {
  src: string;
  alt?: string;
  title: string;
  type: "current" | "old";
  openModal: () => void;
};

export default function ImageComponent({
  src,
  alt = "",
  title,
  type,
  openModal,
}: ImageComponentProps) {
  const width = type === "current" ? 150 : 100;

  return (
    <div className={`w-[${width}px] h-[100px] relative ml-8`} onClick={openModal}>
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
