import Image from "next/image";
import LineWrapper from "./LineWrapper";

type HistoryImageProps = {
  src: string;
  hasLineAbove: boolean;
};

export default function HistoryImage({ src, hasLineAbove }: HistoryImageProps) {
  return (
    <LineWrapper hasLineAbove={hasLineAbove}>
      <Image src={src} alt="" width={256} height={170} className="h-full w-auto rounded-3xl shadow-lg" />
    </LineWrapper>
  );
}
