import HistoryComponent from "@/components/history/HistoryComponent";
import { aboutPageSchema, TimelineElement } from "@/schemas/single/AboutPage";
import fetchStrapi from "@/util/strapi";

export default async function HistoryTest() {
  const data = await fetchStrapi("about-page", aboutPageSchema);

  // Get Timeline part of About Page (with Date objects)
  const timelineElements: TimelineElement[] = data.Timeline.map((e) => {
    const date = new Date(e.Date);
    return {
      ...e,
      Date: date,
    };
  });

  return (
    <div className="mt-56 ml-32">
      <HistoryComponent timelineElements={timelineElements} />;
    </div>
  );
}