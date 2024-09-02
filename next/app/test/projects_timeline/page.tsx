import Timeline from "@/components/projects/Timeline";
import DateBlob from "@/components/projects/DateBlob";
import styles from "./styles.module.css";

export default async function TestPage() {
  var timelineData = [
    { date: "May 23 2023" },
    { date: "June 25 2023" },
    { date: "July 18 2023" },
  ];

  return (
    <div className="flex flex-row items-center justify-center outline">
      <Timeline />
      <div className="w-2/3 mt-header">
      {timelineData.map((data, idx) => (
        <div className="flex outline items-center">
          <div className="border-l-3 w-16 h-1 bg-white"></div>
          <DateBlob data={data} key={idx} />
        </div>
      ))}
      </div>
    </div>
  );
}
