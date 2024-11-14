import Image from "next/image";
import { StaticImageData } from "next/image";

export default function FunFactArrow1({funFact, imgSrc, className} : {funFact: string | null, imgSrc:StaticImageData, className: string}) {
  return (
    <div className={className}>
      <div className="w-96 absolute left-[5em] top-[1em]">
        <p className="text-xl rotate-12 margin-auto text-center">
          {funFact}
        </p>
      </div>
      <Image
        className="h-64 w-80 object-contain"
        src={imgSrc}
        alt=""
      />
    </div>
  );
}
