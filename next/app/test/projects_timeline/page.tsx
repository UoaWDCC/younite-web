import DateBlob from "@/components/projects/DateBlob";
import Timeline from "@/components/projects/Timeline";

export default async function TestPage() {
  var timelineElements = [
    { date: new Date("2023-12-25") },
    { date: new Date("2023-10-27") },
    { date: new Date("2023-11-30") },
    { date: new Date("2023-11-30") },
    { date: new Date("2023-11-30") },
    { date: new Date("2023-11-30") },
    { date: new Date("2023-11-30") },
  ];

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
  );
}
