import Image, { StaticImageData } from "next/image";

type ValueCardProps = {
  name: string;
  description: string;
  index: number;
  flairImages: StaticImageData[];
};

export default function ValueCard({ name, description, index, flairImages }: ValueCardProps) {

  let styles: string = ""

  switch (index) {
    case 0:
      styles = "bg-gradient-to-b from-[#faab36] to-[#ffc9c9] rotate-[-3.259deg] z-[2]";
      break;
    case 1:
      styles= "bg-gradient-to-b from-[#6cc3e5] via-[#75c5e2] to-[#ffdead] rotate-[3.414deg] z-[1]";
      break;
    case 2:
      styles = "bg-gradient-to-b from-[#c8f2ff] to-[#ffc062] rotate-[-1.517deg]";
      break;
    case 3:
      styles = "bg-gradient-to-b from-[#ace8ff] to-[#ace8ff] rotate-[-6deg] z-2 col-start-2";
      break;
    default:
      styles = "";
  }

  return (
    <div className={`relative rounded-lg border-2 border-black shadow-md p-8 aspect-square ${styles}`}>
      <h2 className="text-sm text-center md:text-left sm:text-lg md:text-2xl font-black uppercase">
        {name}
      </h2>
      <p className="mt-1 line-clamp-3 text-ellipsis">{description}</p>
      {index !== 1 && (
        <div className="absolute bottom-0 right-0 opacity-20 w-40 h-40">
          <Image
            src={index === 0 ? flairImages[0] : flairImages[1]}
            fill
            alt=""
            className="object-cover"
          />
        </div>
      )}
    </div>
  );
}