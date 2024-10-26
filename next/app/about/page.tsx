import flair from "@/assets/about/flair.png";
import valueFlair1 from "@/assets/about/value1.png";
import valueFlair2 from "@/assets/about/value2.png";
import History from "@/components/history/History";
import { aboutPageSchema, TimelineElement } from "@/schemas/single/AboutPage";
import fetchStrapi from "@/util/strapi";
import Image from "next/image";
import styles from "./styles.module.css";
import CarouselBase from "@/components/scrollers/CarouselBase";

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
        <p className="mb-2 mx-6">{data.Subtitle}</p>
        <p className="mb-16 mx-6">Click Below!</p>
        <div className="sm:grid sm:grid-cols-3 sm:grid-rows-2 text-black text-left mx-6">
          {data.Values.map((value, i) => (
            <div key={value.Name} className={styles.valueCard}>
              <h2 className="mb-1 text-sm text-center md:text-left sm:text-lg md:text-2xl font-black uppercase">
                {value.Name}
              </h2>
              <p>{value.ValueDescription}</p>
              {i !== 1 && (
                <Image
                  src={i === 0 ? valueFlair1 : valueFlair2}
                  alt=""
                  className="absolute bottom-0 right-0 opacity-20 w-40"
                />
              )}
            </div>
          ))}
        </div>
      </section>
      <section className="py-40 text-center px-4">
        <h2 className="lg:text-8xl md:text-7xl sm:text-6xl text-4xl font-bold leading-[0.95] uppercase mb-12">
          Our History
        </h2>
        <div className="flex h-full ml-24">
          <CarouselBase
            wrapperClass="flex mt-8 mb-0 py-8 w-full"
            innerClass="gap-0"
            >
              <div className="h-[413px] pl-0 pt-10 ml-2 flex items-center">2024</div>
              <History timelineElements={timeline} />

          </CarouselBase>
          <div className="z-10 w-48 bg-[linear-gradient(270deg,_rgba(109,196,230,0.1)_5%,_rgba(109,196,230,0)_50%)] backdrop-blur-md flex items-center justify-center">
            →
          </div>
        </div>
      </section>
    </>
  );
}
