import DateBlob from "@/components/projects/DateBlob";
import Timeline from "@/components/projects/Timeline";


const timelineElements = [
  { date: new Date("2023-12-25") },
  { date: new Date("2023-10-27") },
  { date: new Date("2023-11-30") },
  { date: new Date("2023-11-30") },
  { date: new Date("2023-11-30") },
  { date: new Date("2023-11-30") },
  { date: new Date("2023-11-30") },
];

export default async function TestPage() {

  return (
      <Timeline timelineElements={timelineElements} />
  );
}
