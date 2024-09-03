import HistoryComponent from "@/components/history/HistoryComponent";
import { aboutPageSchema, TimelineElement } from "@/schemas/single/AboutPage";
import fetchStrapi from "@/util/strapi";

export default async function HistoryTest() {
  // return HistoryImage({src: "/uploads/istockphoto_1413873774_612x612_27a467169b.jpg"});
  // return <HistoryImage src="/uploads/istockphoto_1413873774_612x612_27a467169b.jpg" />
  // return <HistoryImage src={process.env.STRAPI_URL + "/uploads/istockphoto_1413873774_612x612_27a467169b.jpg"} />

  const data = await fetchStrapi("about-page", aboutPageSchema);

  const timeline: TimelineElement[] = data.Timeline.map((e) => {
    const date = new Date(e.Date);
    return {
      ...e,
      Date: date,
    };
  }).sort((a, b) => a.Date.getTime() - b.Date.getTime());

  // console.log(timeline);
  // const timeline: TimelineElement[] = [];

  // ({ Date: Date; Image: string; Date: Date; Title: string; Description: string; })

  return (
    <HistoryComponent timelineElements={timeline} />
    // <div>
    //   Hi
    // </div>
  );
}