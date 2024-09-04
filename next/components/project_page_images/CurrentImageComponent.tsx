import Image from "next/image";

export default function CurrentImageComponent({
  src,
  alt,
  title,
}: {
  src: string;
  alt?: string;
  title: string;
}) {
  return (
    <div className="w-[100px] h-[100px] relative">
      <div>
        <Image
          src={src}
          alt={alt || ""}
          className="absolute inset-0 -z-10 w-full h-full object-cover brightness-50 rounded-[50px]"
          width={100}
          height={100}
        />
      </div>
      <div>{title}</div>
    </div>
  );
}
