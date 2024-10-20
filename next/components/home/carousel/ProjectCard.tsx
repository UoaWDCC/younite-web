import Image from "next/image";
import event1 from "@/assets/home/event1.png";
import { ImageType } from "@/schemas/Image";
import { getLargestImageUrl } from "@/util/image";

type ProjectCardProps = {
  name: string;
  date: Date;
  img: ImageType;
}


export default function ProjectCard({ name, date, img }: ProjectCardProps) {
  return (
    <div className="w-60 h-84 rounded-xl text-blue-800 overflow-hidden">
      <div className={`h-48 relative -mb-2 z-10`}>
        <Image src={getLargestImageUrl(img)} fill alt="" />
      </div>

      <div className="h-20 rounded-5x1 bg-white">
        <div className="pl-3 pt-0.5 font-semibold text-lg">{name}</div>
        <div className="pl-3 text-base">{date.toDateString().substring(3)}</div>
      </div>
    </div>

  )
}