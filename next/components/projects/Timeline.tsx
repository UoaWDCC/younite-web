import { ProjectType } from "@/schemas/collection/Project";
import ProjectsComponent from "./ProjectsComponent";

const Timeline = ({
  timelineElements,
}: {
  timelineElements: ProjectType[];
}) => {
  return (
    <div className="flex flex-col pl-[10%] pt-[5%] pb-[5%]">
      <div className="h-4 w-4 bg-white rounded-full"></div>
      <div>
        {timelineElements.map((timelineElement, index) => (
          <ProjectsComponent
            key={timelineElement.slug}
            timelineElement={timelineElement}
            isEven={index % 2 === 0}
          />
        ))}
      </div>
      <div className="h-4 w-4 bg-white rounded-full"></div>
    </div>
  );
};

export default Timeline;
