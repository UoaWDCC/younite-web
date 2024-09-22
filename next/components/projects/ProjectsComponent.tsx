"use client";

import { ProjectType } from "@/schemas/collection/Project";
import { getLargestImageUrl } from "@/util/image";
import DateBlob from "./DateBlob";
import ImageComponent from "./ProjectsImage";

type ProjectsComponentProps = {
  timelineElement: ProjectType;
  isEven: boolean;
};

export default function ProjectsComponent({
  timelineElement,
  isEven,
}: ProjectsComponentProps) {
  return (
    <div className="flex items-center gap-20">
      <DateBlob timelineElement={timelineElement} isEven={isEven} />
      <ImageComponent
        src={getLargestImageUrl(timelineElement.image)}
        title={timelineElement.title}
        type={"current"}
      />
    </div>
  );
}
