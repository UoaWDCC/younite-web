import Image from "next/image";
import { StaticImageData } from "next/image";

export default function FunFactArrow2({funFact, imgSrc, className} : {funFact: string | null, imgSrc:StaticImageData, className: string}) {
  return (
    <div className={className}>
      <Image
        className="h-64 w-80 object-contain"
        src={imgSrc}
        alt=""
      />
      <div className="w-96 absolute bottom-[1em] right-[4em]">
        <p className="text-xl -rotate-12 margin-auto text-center">
          {funFact}
        </p>
      </div>
    </div>
  );
}
