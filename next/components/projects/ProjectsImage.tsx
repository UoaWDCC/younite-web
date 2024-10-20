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
  const height = type === "current" ? 150 : 100;

  return (
    <div className={`w-[600px] h-[${height}px] relative`}>
      <div>
        <Image
          src={src}
          alt={alt || ""}
          className="absolute inset-0 -z-10 w-full h-full object-cover brightness-50 rounded-[40px]"
          width={600}
          height={height}
        />
      </div>

      <div className="absolute top-[15%] bottom-[15%] right-[15%] w-[35%] bg-black opacity-70 rounded-[20px] z-10">
        <div className="text-lg pt-2 pb-3 pl-5 pr-5 z-20 opacity-100 text-right">
          {title}
        </div>
      </div>
    </div>
  );
}