import flair from "@/assets/about/flair.png";
import valueFlair1 from "@/assets/about/value1.png";
import valueFlair2 from "@/assets/about/value2.png";
import History from "@/components/history/History";
import { aboutPageSchema, TimelineElement } from "@/schemas/single/AboutPage";
import fetchStrapi from "@/util/strapi";
import Image from "next/image";
import styles from "./styles.module.css";
import ValueCard from "@/components/about/valuecards/ValueCard";

export default async function AboutPage() {
  const data = await fetchStrapi("about-page", aboutPageSchema);

  const timeline: TimelineElement[] = data.Timeline.map((e) => {
    const date = new Date(e.Date);
    return {
      ...e,
      Date: date,
    };
  }).sort((a, b) => a.Date.getTime() - b.Date.getTime());

  return (
    <>
      <Image src={flair} alt="" className="absolute -z-10 top-[70%]" />
      <section className="max-w-4xl mx-auto mt-header pt-24 flex flex-col items-center text-center">
        <h1 className="lg:text-8xl md:text-7xl sm:text-6xl text-4xl font-bold leading-[0.95] uppercase mb-6">
          Our Values
        </h1>
        <p className="mb-16 mx-6">{data.Subtitle}</p>

        {/* Cards are not clickable unfortunately... */}
        {/* <p className="mb-16 mx-6">Click Below!</p> */}

        <div className="sm:grid sm:grid-cols-3 sm:grid-rows-2 text-black text-left mx-6">
          {data.Values.map((value, i) => (
            <div key={value.Name} className="relative rounded-lg border-2 border-black shadow-md p-8 aspect-square">
              <ValueCard
                name={value.Name}
                description={value.ValueDescription}
                index={i}
                flairImages={[valueFlair1, valueFlair2]}
              />
            </div>
          ))}
        </div>
      </section>
      <section className="py-40 text-center px-4">
        <h2 className="lg:text-8xl md:text-7xl sm:text-6xl text-4xl font-bold leading-[0.95] uppercase mb-12">
          Our History
        </h2>
        <History timelineElements={timeline} />
      </section>
    </>
  );
}
