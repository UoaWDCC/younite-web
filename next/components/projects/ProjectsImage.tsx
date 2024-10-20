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
          className="absolute inset-0 -z-10 w-full h-full object-cover brightness-50 rounded-[50px]"
          width={300}
          height={height}
        />
      </div>

      {type === "current" ? (
        <div className="absolute top-[30%] bottom-[30%] left-[15%] bg-black opacity-70 rounded-[10px] z-10 flex items-center">
          <div className="text-lg pt-2 pb-3 pl-5 pr-5 z-20 opacity-100 font-semibold">
            {title}
          </div>
        </div>
      ) : (
        <div className="absolute top-[15%] bottom-[15%] right-[15%] w-[35%] bg-black opacity-70 rounded-[15px] z-10">
          <div className="text-lg pt-2 pb-3 pl-5 pr-4 z-20 opacity-100 text-right font-semibold">
            {title}
          </div>
        </div>
      )}
    </div>
  );
}