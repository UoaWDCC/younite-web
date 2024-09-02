import ImageComponent from "./ImageComponent";

export default function OldImageComponent({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return <ImageComponent src={src} alt={alt} width={1100} height={310} />;
}
