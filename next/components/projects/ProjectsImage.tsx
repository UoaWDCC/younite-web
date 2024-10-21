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
        // <div className="overflow-hidden absolute top-[30%] bottom-[30%] w-[60%] bg-black bg-opacity-50 rounded-[15px] z-10">
        //   <div className="line-clamp-2 text-ellipsis overflow-hidden text-2xl pt-3 pb-3 pl-5 pr-5 z-20 opacity-100 text-center font-semibold">
        //     {title}
        //   </div>
        // </div>

        <TextOverlay
          title={
            title.length > 20 ? title.substring(0, 23).concat("...") : title
          }
          className="top-[30%] bottom-[30%] w-[60%] flex items-center justify-center"
        />
      ) : (
        // <div className="overflow-hidden absolute top-[15%] bottom-[15%] right-[18%] w-[25%] bg-black bg-opacity-50 rounded-[15px] z-10">
        //   <div className="text-ellipsis overflow-hidden text-2xl pt-1 pb-1 pl-5 pr-5 z-20 opacity-100 text-right font-semibold">
        //     {title}
        //   </div>
        // </div>

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