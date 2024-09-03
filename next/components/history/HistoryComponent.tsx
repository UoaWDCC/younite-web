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
  const fullTimeline: TimelineElement[] = timelineElements
    .map((element) => {
      const date = new Date(element.Date);
      return {
        ...element,
        Date: date,
      };
    })
    .sort((a, b) => a.Date.getTime() - b.Date.getTime());

  const topTimeline: TimelineElement[] = [];
  const bottomTimeline: TimelineElement[] = [];

  for (let i = 0; i < fullTimeline.length; i++) {
    if (i % 2 == 0) {
      topTimeline.push(fullTimeline[i]);
    } else {
      bottomTimeline.push(fullTimeline[i]);
    }
  }

  // console.log("top timeline", topTimeline);
  // console.log(bottomTimeline);

  const topReactNodes = topTimeline.map((element) => {
    if (element.__component == "project-timeline.text-timeline-item") {
      const textElement = element as TextTimelineElement;
      return (
        <HistoryText
          title={textElement.Title}
          description={textElement.Description}
          hasLineAbove={true}
        />
      );
    } else {
      const imageElement = element as ImageTimelineElement;
      return <HistoryImage src={imageElement.Image} hasLineAbove={true} />;
    }
  });

  const bottomReactNodes = bottomTimeline.map((element) => {
    if (element.__component == "project-timeline.text-timeline-item") {
      const textElement = element as TextTimelineElement;
      return (
        <HistoryText
          title={textElement.Title}
          description={textElement.Description}
          hasLineAbove={false}
        />
      );
    } else {
      const imageElement = element as ImageTimelineElement;
      return <HistoryImage src={imageElement.Image} hasLineAbove={false} />;
    }
  });

  return (
    <div>
      <div className="flex">{topReactNodes}</div>
      <div className="bg-white h-[1px] w-1/2 mt-80 mx-32" />;
      <div className="flex">{bottomReactNodes}</div>
    </div>
  );
}
