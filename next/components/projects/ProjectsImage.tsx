import Image from "next/image";

type ImageComponentProps = {
  src: string;
  alt?: string;
  title: string;
  type: "current" | "old";

  // }) {
  //   const height = type === "current" ? 350 : 100;

  //   return (
  //     <div
  //       className="w-[600px] relative flex justify-center"
  //       style={{ height: `${height}px` }}
  //     >
  //       <div>
  //         <Image
  //           src={src}
  //           alt={alt || ""}
  //           className="absolute inset-0 -z-10 w-full h-full object-cover brightness-75 opacity-85 rounded-[50px]"
  //           width={300}
  //           height={height}

  openModal: () => void;
};

export default function ImageComponent({
  src,
  alt = "",
  title,
  type,
  openModal,
}: ImageComponentProps) {
  const heightstyle = type === "current" ? "h-[300px]" : "h-[100px]";
  const height = type === "current" ? 300 : 100;

  return (
    <div
      // className={`h-96 w-[600px] relative ml-8`}
      className={`${heightstyle} w-[600px] relative ml-8`}
      onClick={openModal}
    >
      <div>
        <Image
          src={src}
          alt={alt}
          className="absolute inset-0 -z-10 w-full h-full object-cover brightness-75 opacity-85 rounded-[50px]"
          width={300}
          height={height}
        />
      </div>

      {type === "current" ? (
        <TextOverlay
          title={
            title.length >= 28 ? title.substring(0, 25).concat("...") : title
          }
          className="top-[35%] bottom-[35%] left-[12%] w-[75%] flex items-center justify-center"
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
