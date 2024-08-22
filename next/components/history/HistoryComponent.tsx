import { TimelineElement } from "@/schemas/single/AboutPage"

type HistoryComponentProps = {
  timelineElements: [TimelineElement]
}



export default function HistoryComponent({timelineElements}: HistoryComponentProps) {

  const fullTimeline: TimelineElement[] = timelineElements.map((element) => {
    const date = new Date(element.Date);
    return {
      ...element,
      Date: date,
    };
  }).sort((a, b) => a.Date.getTime() - b.Date.getTime());

  const topTimeline: TimelineElement[] = []
  const bottomTimeline: TimelineElement[] = []

  for (let i = 0; i < fullTimeline.length; i++) {
    if (i % 2 == 0) {
      topTimeline.push(fullTimeline[i]);
    } else {
      bottomTimeline.push(fullTimeline[i]);
    }
  }


  return (




    <div className="bg-white h-[1px] w-1/2 mt-80 mx-32" />


  )
}