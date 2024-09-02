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
    <div className="flex-row-reverse items-center justify-center outline">
      <Timeline />
      {timelineData.map((data, idx) => (
        <DateBlob data={data} key={idx} />
      ))}
    </div>
  );
}
