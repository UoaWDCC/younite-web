import Image from "next/image";
import event1 from "@/assets/home/event1.png";

type ProjectCardProps = {
  name: string;
  // date: string;
  // src: string;
}


export default function ProjectCard({ name }: ProjectCardProps) {
  return (
    <div className="w-60 h-64 rounded-xl text-blue-800 overflow-hidden">
      <div className={`h-48 relative -mb-2 z-10`}>
        <Image src={event1} fill alt="" />
      </div>

      <div className="h-16" style={{ backgroundColor: "white" }}>
        <div className="pl-3 pt-1.5 font-semibold text-lg">{name}</div>
        {/* <div className="pl-3 text-base">{date}</div> */}
      </div>
    </div>

  )
}