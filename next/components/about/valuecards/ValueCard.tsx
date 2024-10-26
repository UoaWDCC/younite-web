import Image, { StaticImageData } from "next/image";

type ValueCardProps = {
  name: string;
  description: string;
  index: number;
  flairImages: StaticImageData[];
};

export default function ValueCard({ name, description, index, flairImages }: ValueCardProps) {
  return (
    <div>
      <div className="absolute top-3 left-3">
        <h2 className="text-sm text-center md:text-left sm:text-lg md:text-2xl font-black uppercase">
          {name}
        </h2>
        <p className="mt-1 line-clamp-3 text-ellipsis">{description}</p>
      </div>

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