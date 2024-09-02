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

// note:
// having the same code for current and old image components (except for the w/h) doesn't seem
// efficient, so maybe we can get rid of the current/old components and just have the basic
// image component?