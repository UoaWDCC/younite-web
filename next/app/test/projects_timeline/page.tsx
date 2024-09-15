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

  //   return (
  //     <div className="flex flex-row items-center justify-center outline">
  //       <Timeline />
  //       <div className="w-2/3 mt-header">
  //       {timelineData.map((data, idx) => (
  //         <div className="flex outline items-center">
  //           <div className="border-l-3 w-16 h-1 bg-white"></div>
  //           <DateBlob data={data} key={idx} />
  //         </div>
  //       ))}
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="flex right-2 flex-col items-left mt-header">
      <div className="h-4 w-4 bg-white rounded-full"></div>
      <div>
        {timelineElements.map(
          (
            timelineElement,
            index, // check if index is even or not, and pass in length prop depending
          ) => (
            <DateBlob
              timelineElement={timelineElement}
              isEven={index % 2 == 0}
            />
          ),
        )}
      </div>
      <div className="h-4 w-4 bg-white rounded-full"></div>
    </div>
  );
}
