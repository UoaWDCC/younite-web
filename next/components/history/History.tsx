import { TimelineElement } from "@/schemas/single/AboutPage";
import HistoryComponent from "./HistoryComponent";

type HistoryComponentProps = {
  timelineElements: TimelineElement[];
};

export default function History({ timelineElements }: HistoryComponentProps) {
  // Sort timeline by date
  const sortedTimelineElements: TimelineElement[] = timelineElements.sort(
    (a, b) => a.Date.getTime() - b.Date.getTime(),
  );

  // Split timeline + map TimelineElements -> components
  const topTimeline: TimelineElement[] = [];
  const bottomTimeline: TimelineElement[] = [];
  for (let i = 0; i < sortedTimelineElements.length; i++) {
    if (i % 2 == 0) {
      // Even elements go on top
      topTimeline.push(sortedTimelineElements[i]);
    } else {
      // Odd elements go on bottom
      bottomTimeline.push(sortedTimelineElements[i]);
    }
  }

  return (
    <div className="ml-16">
      <div className="flex items-end">
        {topTimeline.map((element) => (
          <HistoryComponent element={element} position="top" />
        ))}
      </div>
      <div className="bg-white h-1 w-full" />
      <div className="flex items-start ml-[12rem]">
        {bottomTimeline.map((element) => (
          <HistoryComponent element={element} position="bottom" />
        ))}
      </div>
    </div>
  );
}
