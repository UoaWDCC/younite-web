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
  const height = type === "current" ? 350 : 100;

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
        <TextOverlay
          title={
            title.length >= 25 ? title.substring(0, 25).concat("...") : title
          }
          className="top-[35%] bottom-[35%] w-[75%] flex items-center justify-center"
        />
      ) : (
        <TextOverlay
          title={title}
          className="top-[15%] bottom-[15%] right-[18%] w-[25%] text-right"
        />
      )}
    </div>
  );
}

function TextOverlay({
  title,
  className = "",
}: {
  title: string;
  className?: string;
}) {
  return (
    <div
      className={`absolute text-ellipsis overflow-hidden text-2xl py-1 px-5 font-semibold bg-black bg-opacity-50 rounded-[15px]  ${className}`}
    >
      {title}
    </div>
  );
}