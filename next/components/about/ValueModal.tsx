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
    <div className="w-[30rem] sm:w-[36rem] md:w-[44rem] aspect-video bg-[linear-gradient(to_top,#A2D6E5,#FABD6E)] grid grid-cols-2">
      {/* Left side of the modal - text title */}
      <div className="flex flex-col justify-center p-8 text-center text-white relative z-30">
        <h2 className="font-extrabold text-3xl uppercase mb-4">{title}</h2>
        <p>{description}</p>
      </div>

      {/* Right side of the modal - image */}
      <div className="relative">
        <div
          className="flex flex-col justify-center items-center overflow-hidden h-full"
          style={{ clipPath: "url(#clip-path-svg)" }} // See ClipPathSvg() for why this is necessary
        >
          <ClipPathSvg />
          <Image
            src={imageUrl}
            alt="Value Image"
            width={500}
            height={500}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>

      {/* Transparent overlay on image - separate element so image is also whitened */}
      <div className="absolute inset-0 bg-white bg-opacity-30" />
    </div>
  );
}

// This is a very un-react way of doing things, but it's the only way to get the clipPath to work
// Even https://www.npmjs.com/package/react-clip-path requires this ID-linking method
function ClipPathSvg() {
  return (
    <svg className="absolute">
      <defs>
        <clipPath id="clip-path-svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            // This path edited with https://yqnn.github.io/svg-path-editor/
            d="m 118.7034 322.2488 c -54.3492 -19.6898 -90.9084 -74.8598 -100.3078 -122.6756 c -8.5053 -43.267 26.0325 -74.5205 55.7794 -103.8464 c 23.3761 -23.0452 56.2069 -33.5353 92.0334 -41.8748 c 42.9647 -10.0012 89.4862 -35.5631 131.827 -10.2352 c 42.2948 25.3003 27.705 76.3786 45.6286 116.3883 c 20.1398 44.9578 89.2739 93.1692 64.1053 128.5664 c -25.372 35.6841 -102.0909 -9.345 -153.1012 -3.4022 c -50.3827 5.8702 -84.1669 55.8445 -135.9647 37.0795 z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
