import Image from "next/image";

export default function HighBackgroundTest() {
  return (
    <Image
      src="/younitelogo.png"
      alt="Background image"
      width={1980}
      height={1080}
      className="border border-red-500 mt-header"
    />
  );
}
