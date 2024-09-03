import {
  ImageTimelineElement,
  TextTimelineElement,
  TimelineElement,
} from "@/schemas/single/AboutPage";
import { getLargestImageUrl } from "@/util/image";
import HistoryImage from "./HistoryImage";
import HistoryText from "./HistoryText";

type HistoryComponentProps = {
  element: TimelineElement;
  position: "top" | "bottom";
};

export default function HistoryComponent({
  element,
  position,
}: HistoryComponentProps) {
  const line = <div className="bg-white w-1 h-12" />;
  const hasLineAbove = position === "bottom";

  return (
    <div className="flex flex-col items-center mx-6 h-56 w-72">
      {hasLineAbove && line}
      {elementToComponent(element)}
      {!hasLineAbove && line}
    </div>
  );
}

// TimelineElement -> React component
function elementToComponent(element: TimelineElement): React.ReactNode {
  if (element.__component == "project-timeline.text-timeline-item") {
    // Text components
    const textElement = element as TextTimelineElement;
    return (
      <HistoryText
        title={textElement.Title}
        description={textElement.Description}
      />
    );
  } else {
    // Image components
    const imageElement = element as ImageTimelineElement;
    return <HistoryImage src={getLargestImageUrl(imageElement.Image)} />;
  }
}
