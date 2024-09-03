import LineWrapper from "./LineWrapper";

type HistoryImageProps = {
  src: string;
  hasLineAbove: boolean;
};

export default function HistoryImage({ src, hasLineAbove }: HistoryImageProps) {
  return (
    <LineWrapper hasLineAbove={hasLineAbove}>
      <img src={src} />
    </LineWrapper>
  );
}
