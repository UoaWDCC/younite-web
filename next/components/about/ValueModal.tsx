import Image from "next/image";

type ValueModalProps = {
  title: string;
  description: string;
  imageUrl: string;
};

export default function ValueModal({
  title,
  description,
  imageUrl,
}: ValueModalProps) {

  return (
    <div className="w-[30rem] sm:w-[36rem] md:w-[44rem] aspect-video flex bg-[linear-gradient(to_top,#A2D6E5,#FABD6E)]">
      {/* Left side of the modal - text title */}
      <div className="flex-1 flex flex-col justify-center p-8 text-center text-white relative z-30">
        <h2 className="font-extrabold text-3xl uppercase mb-4">{title}</h2>
        <p>{description}</p>
      </div>

      {/* Right side of the modal - image */}
      <div className="relative flex-1 flex flex-col justify-center">
        <div
          className="justify-center items-center overflow-hidden"
          style={{
            clipPath:
              'path("M 0 0 L 60% 0 Q 100% 25% 100% 50% Q 100% 75% 60% 100% L 0 100% Z")',
          }}
        >
          <Image
            src={imageUrl}
            alt="Value Image"
            width={500}
            height={500}
            layout="responsive"
            objectFit="cover"
          />
        </div>

        {/* Transparent overlay on image - separate element so image is also whitened */}
        <div className="absolute inset-0 bg-white bg-opacity-30" />
      </div>
    </div>
  );
}
