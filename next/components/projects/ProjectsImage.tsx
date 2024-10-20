import Image from "next/image";

export default function ImageComponent({
  src,
  alt,
  title,
  type,
}: {
  src: string;
  alt?: string;
  title: string;
  type: "current" | "old";
}) {
  const width = type === "current" ? 150 : 100;

  return (
    <div className={`w-[${width}px] h-[100px] relative`}>
      <div>
        <Image
          src={src}
          alt={alt || ""}
          className="absolute inset-0 -z-10 w-full h-full object-cover brightness-50 rounded-[40px]"
          width={width}
          height={100}
        />
      </div>

      <div className="absolute top-[15%] bottom-[15%] right-[15%] w-[35%] bg-black opacity-60 rounded-[20px]"></div>

      <div className="">
        <div>{title}</div>
      </div>
    </div>
  );
}
