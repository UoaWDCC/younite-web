import Timeline from "@/components/projects/Timeline";

const timelineElements = [
  { Date: new Date("2023-12-25") },
  { Date: new Date("2023-10-27") },
  { Date: new Date("2023-11-30") },
  { Date: new Date("2023-11-30") },
  { Date: new Date("2023-11-30") },
  { Date: new Date("2023-11-30") },
  { Date: new Date("2023-11-30") },
];

export default async function TestPage() {
  return <Timeline timelineElements={timelineElements} />;
}
