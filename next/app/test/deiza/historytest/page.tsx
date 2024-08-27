import HistoryComponent from "@/components/history/HistoryComponent";
import { TimelineElement } from "@/schemas/single/AboutPage";


export default async function HistoryTest() {
  // return HistoryImage({src: "/uploads/istockphoto_1413873774_612x612_27a467169b.jpg"});
  // return <HistoryImage src="/uploads/istockphoto_1413873774_612x612_27a467169b.jpg" />
  // return <HistoryImage src={process.env.STRAPI_URL + "/uploads/istockphoto_1413873774_612x612_27a467169b.jpg"} />

  // const data = await fetchStrapi("about-page", aboutPageSchema);

  // const timeline: TimelineElement[] = data.Timeline.map((e) => {
  //   const date = new Date(e.Date);
  //   return {
  //     ...e,
  //     Date: date,
  //   };
  // }).sort((a, b) => a.Date.getTime() - b.Date.getTime());

  const timeline: TimelineElement[] =


  return (
    <HistoryComponent timelineElements={timeline}/>
  )

}