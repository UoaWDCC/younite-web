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

  // Split timeline + map TimelineElements -> components
  const topTimeline: React.ReactNode[] = [];
  const bottomTimeline: React.ReactNode[] = [];
  for (let i = 0; i < sortedTimelineElements.length; i++) {
    if (i % 2 == 0) {
      // Even elements go on top
      topTimeline.push(elementToComponent(sortedTimelineElements[i], "top"));
    } else {
      // Odd elements go on bottom
      bottomTimeline.push(
        elementToComponent(sortedTimelineElements[i], "bottom"),
      );
    }
  }

  return (
    <div>
      <div className="flex items-end">{topTimeline}</div>
      <div className="bg-white h-1 w-1/2" />
      <div className="flex items-start">{bottomTimeline}</div>
    </div>
  );
}

function elementToComponent(
  element: TimelineElement,
  position: "top" | "bottom",
): React.ReactNode {
  if (element.__component == "project-timeline.text-timeline-item") {
    // Text components
    const textElement = element as TextTimelineElement;
    return (
      <HistoryText
        title={textElement.Title}
        description={textElement.Description}
        hasLineAbove={position === "bottom"}
      />
    );
  } else {
    // Image components
    const imageElement = element as ImageTimelineElement;
    return (
      <HistoryImage
        src={imageElement.Image}
        hasLineAbove={position === "bottom"}
      />
    );
  }
}