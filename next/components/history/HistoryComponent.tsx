import {
  ImageTimelineElement,
  TextTimelineElement,
  TimelineElement,
} from "@/schemas/single/AboutPage";
import HistoryImage from "./HistoryImage";
import HistoryText from "./HistoryText";

type HistoryComponentProps = {
  timelineElements: TimelineElement[];
};

export default function HistoryComponent({
  timelineElements,
}: HistoryComponentProps) {
  // Sort timeline by date
  const sortedTimelineElements: TimelineElement[] = timelineElements.sort(
    (a, b) => a.Date.getTime() - b.Date.getTime(),
  );

  // Map timeline elements to components
  const timelineCcomponents = sortedTimelineElements.map((element) => {
    if (element.__component == "project-timeline.text-timeline-item") {
      // Text components
      const textElement = element as TextTimelineElement;
      return (
        <HistoryText
          title={textElement.Title}
          description={textElement.Description}
          hasLineAbove={true}
        />
      );
    } else {
      // Image components
      const imageElement = element as ImageTimelineElement;
      return <HistoryImage src={imageElement.Image} hasLineAbove={true} />;
    }
  });

  // Split components into top and bottom
  const topTimeline: React.ReactNode[] = [];
  const bottomTimeline: React.ReactNode[] = [];
  for (let i = 0; i < timelineCcomponents.length; i++) {
    if (i % 2 == 0) {
      topTimeline.push(timelineCcomponents[i]);
    } else {
      bottomTimeline.push(timelineCcomponents[i]);
    }
  }

  return (
    <div>
      <div className="flex">{topTimeline}</div>
      <div className="bg-white h-[1px] w-1/2 mt-80 mx-32" />;
      <div className="flex">{bottomTimeline}</div>
    </div>
  );
}
