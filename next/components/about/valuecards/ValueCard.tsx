"use client";

import { useModal } from "@/components/modal/ModalContextProvider";
import { Value } from "@/schemas/single/AboutPage";
import { getLargestImageUrl } from "@/util/image";
import Image from "next/image";
import ValueModal from "../ValueModal";
import { ImageType } from "@/schemas/Image";

type ValueCardProps = {
  value: Value;
  index: number;
};

export default function ValueCard({ value, index }: ValueCardProps) {
  const { Name, CardDescription, CardImage, PopupDescription, PopupImage } =
    value;

  const { open } = useModal();

  const openValueModal = () => {
    open(
      <ValueModal
        title={Name}
        description={PopupDescription}
        imageUrl={getLargestImageUrl(PopupImage)}
      />,
    );
  };

  return (
    <div
      className={`relative rounded-lg border-2 border-black shadow-md p-12 sm:p-8 aspect-[5] sm:aspect-square ${getBgStyles(index)}`}
      onClick={openValueModal}
    >
      <h2 className="text-sm text-center md:text-left sm:text-lg md:text-2xl font-black uppercase">
        {Name}
      </h2>
      <p className="mt-1 line-clamp-3 text-ellipsis">{CardDescription}</p>
      {CardImage.data && (
        <div className="absolute bottom-0 right-0 opacity-20 w-40 h-40">
          <Image
            src={getLargestImageUrl(CardImage as ImageType)} // CardImage.data has been null-checked
            fill
            alt=""
            className="object-cover"
          />
        </div>
      )}
    </div>
  );
}

// Background styles for each card
function getBgStyles(index: number) {
  switch (index) {
    case 0:
      return "bg-gradient-to-b from-[#faab36] to-[#ffc9c9] rotate-[-3.259deg]";
    case 1:
      return "bg-gradient-to-b from-[#6cc3e5] via-[#75c5e2] to-[#ffdead] rotate-[3.414deg]";
    case 2:
      return "bg-gradient-to-b from-[#c8f2ff] to-[#ffc062] rotate-[-1.517deg]";
    case 3:
      return "bg-gradient-to-b from-[#ace8ff] to-[#ace8ff] rotate-[-6deg]";
    default:
      return "";
  }
}