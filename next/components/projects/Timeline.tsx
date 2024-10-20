import DateBlob from "@/components/projects/DateBlob";
import { ProjectType } from "@/schemas/collection/Project";
import { getLargestImageUrl } from "@/util/image";
import ImageComponent from "./ProjectsImage";

const Timeline = ({
  timelineElements,
}: {
  timelineElements: ProjectType[];
}) => {

  const firstDay = new Date(new Date().getFullYear(), 0, 1);

  return (
    <div className="flex flex-col pl-[10%] pt-[5%] pb-[5%]">
      <div className="h-4 w-4 bg-white rounded-full"></div>
      <div>
        {timelineElements.map((timelineElement, index) => {
          const date = new Date(timelineElement.Date);
          const type = date >= firstDay ? "current" : "old";

          return (
            <div className="flex items-center gap-20">
              <DateBlob
                timelineElement={timelineElement}
                isEven={index % 2 == 0}
              />
              <ImageComponent
                src={getLargestImageUrl(timelineElement.image)}
                title={timelineElement.title}
                type={type}
              />
            </div>
          );
        })}
      </div>
      <div className="h-4 w-4 bg-white rounded-full"></div>
    </div>
  );
};

export default Timeline;
