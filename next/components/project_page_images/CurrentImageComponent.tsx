import ImageComponent from "./ImageComponent";

export default function CurrentImageComponent({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return <ImageComponent src={src} alt={alt} width={950} height={620} />;
}
