import Image from "next/image";

export default function ImageComponent({
  src,
  alt,
  width,
  height,
  title,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  title: string;
}) {
  return (
    <div>
      <div>
        <Image
          src={src}
          alt={alt}
          className="absolute inset-0 -z-10 w-full h-full object-cover brightness-50 rounded-[50px]"
          width={width}
          height={height}
        />
      </div>
      <div>{title}</div>
    </div>
  );
}
