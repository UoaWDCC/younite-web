import Image from "next/image";

type HistoryImageProps = {
  src: string;
};

export default function HistoryImage({ src }: HistoryImageProps) {
  return (
    <Image
      src={src}
      alt=""
      width={256}
      height={170}
      className="h-full w-auto rounded-3xl shadow-lg"
    />
  );
}
