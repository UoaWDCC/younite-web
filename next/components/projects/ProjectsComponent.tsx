"use client";

import { ProjectType } from "@/schemas/collection/Project";
import { getLargestImageUrl } from "@/util/image";
import { useModal } from "../modal/ModalContextProvider";
import DateBlob from "./DateBlob";
import ProjectModal from "./ProjectModal";
import ImageComponent from "./ProjectsImage";

type ProjectsComponentProps = {
  timelineElement: ProjectType;
  isEven: boolean;
};

export default function ProjectsComponent({
  timelineElement,
  isEven,
}: ProjectsComponentProps) {
  const { open } = useModal();
  const { title, Description } = timelineElement;
  const imageUrl = getLargestImageUrl(timelineElement.image);

  function openModal() {
    open(
      <ProjectModal
        title={title}
        description={Description}
        imageUrl={imageUrl}
      />,
    );
  }

  return (
    <div className="flex items-center gap-20">
      <DateBlob timelineElement={timelineElement} isEven={isEven} />
      <ImageComponent
        src={getLargestImageUrl(timelineElement.image)}
        title={timelineElement.title}
        type={"current"}
        openModal={openModal}
      />
    </div>
  );
}
