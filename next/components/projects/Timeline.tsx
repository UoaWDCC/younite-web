import DateBlob from "@/components/projects/DateBlob";


const Timeline = ({timelineElements} : { timelineElements: { date: Date }[] }) => {
  console.log(timelineElements);
  return (
      <div className="flex flex-col mt-header pl-[10%] pt-[5%] pb-[5%]">
      <div className="h-4 w-4 bg-white rounded-full"></div>
      <div>
        {timelineElements.map((timelineElement, index) => (
          <DateBlob timelineElement={timelineElement} isEven={index % 2 == 0} />
        ))}
      </div>
      <div className="h-4 w-4 bg-white rounded-full"></div>
    </div>
      /* <div className="flex flex-col relative -right-2 mt-header items-center justify-end h-96">
      <div className="h-4 w-4 bg-white rounded-full"></div>
      <div className="w-1 h-full bg-white"></div>
      <div className="h-4 w-4 bg-white rounded-full"></div>
    </div> */
  );
};

export default Timeline;
