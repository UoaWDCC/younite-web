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
    <div
      className="w-[600px] relative flex justify-center"
      style={{ height: `${height}px` }}
    >
      <div>
        <Image
          src={src}
          alt={alt || ""}
          className="absolute inset-0 -z-10 w-full h-full object-cover brightness-75 opacity-85 rounded-[50px]"
          width={300}
          height={height}
        />
      </div>

      {type === "current" ? (
        <div className="absolute top-[30%] bottom-[30%] w-[60%] bg-black bg-opacity-60 rounded-[15px] z-10 flex justify-center items-center">
          <div className="text-2xl pt-3 pb-3 pl-5 pr-5 z-20 opacity-100 text-center font-semibold">
            {title}
          </div>
        </div>
      ) : (
        <div className="absolute top-[15%] bottom-[15%] right-[18%] w-[25%] bg-black bg-opacity-50 rounded-[15px] z-10">
          <div className="text-2xl pt-1 pb-1 pl-5 pr-5 z-20 opacity-100 text-right font-semibold">
            {title}
          </div>
        </div>
      )}
    </div>
  );
}