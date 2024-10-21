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
  type: "current" | "old";
};

export default function ProjectsComponent({
  timelineElement,
  isEven,
  type,
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
    <div className="flex ml-4 sm:ml-10 md:ml-0 items-center pl-[6px] p-4">
      {/* Vertical line, -my-4 to 'undo' the p-4 */}
      <div className="bg-white w-1 self-stretch -my-4" />
      <div className="flex flex-col gap-7 md:flex-row">
        <DateBlob timelineElement={timelineElement} isEven={isEven} />
        <ImageComponent
          src={getLargestImageUrl(timelineElement.image)}
          title={timelineElement.title}
          type={type}
          openModal={openModal}
        />
      </div>
    </div>
  );
}
