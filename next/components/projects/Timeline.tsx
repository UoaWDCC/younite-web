import { ProjectType } from "@/schemas/collection/Project";
import ProjectsComponent from "./ProjectsComponent";

type TimelineProps = {
  timelineElements: ProjectType[];
  type: "current" | "old";
};

const Timeline = ({ timelineElements, type }: TimelineProps) => {
  return (
    <div className="flex flex-col pl-[10%] pt-[5%] pb-[5%]">
      <div className="h-4 w-4 ml-4 sm:ml-10 md:ml-0 bg-white rounded-full"></div>
      <div>
        {timelineElements.map((timelineElement, index) => (
          <ProjectsComponent
            key={timelineElement.slug}
            timelineElement={timelineElement}
            isEven={index % 2 === 0}
            type={type}
          />
        ))}
      </div>
      <div className="h-4 w-4 ml-4 sm:ml-10 md:ml-0 bg-white rounded-full"></div>
    </div>
  );
};

export default Timeline;
