import flair from "@/assets/about/flair.png";
import valueFlair1 from "@/assets/about/value1.png";
import valueFlair2 from "@/assets/about/value2.png";
import Header from "@/components/header/header";
import { aboutPageSchema, TimelineElement } from "@/schemas/single/AboutPage";
import { getLargestImageUrl } from "@/util/image";
import fetchStrapi from "@/util/strapi";
import Image from "next/image";
import styles from "./styles.module.css";

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
    <main
      style={{
        backgroundImage:
          "linear-gradient(180deg, #0D66B7 0%, #62BCE0 48.87%, #FFE2C8 94.91%), linear-gradient(359deg, #6CC3E5 44.81%, rgba(255, 233, 204, 0.80) 56.29%, rgba(255, 202, 133, 0.00) 84.97%)",
      }}
      className="isolate"
    >
      {/* @ts-ignore */}
      <Header />
      <Image src={flair} alt="" className="absolute -z-10 top-[70%]" />
      <section className="max-w-4xl mx-auto py-20 flex flex-col items-center text-center">
        <h1 className="text-8xl font-bold leading-[0.95] uppercase mb-6">
          Our Values
        </h1>
        <p className="mb-2 mx-6">{data.Subtitle}</p>
        <p className="mb-16 mx-6">Click Below!</p>
        <div className="grid grid-cols-3 grid-rows-2 text-black text-left mx-6">
          {data.Values.map((value, i) => (
            <div key={value.Name} className={styles.valueCard}>
              <h2 className="mb-1 text-2xl font-black uppercase">
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
        <h2 className="text-8xl font-bold leading-[0.95] uppercase mb-12">
          Our History
        </h2>
        <div className="text-left max-w-xl mx-auto">
          <ol className="relative border-s border-gray-100 text-b-dark-blue">
            {timeline.map((e, i) => {
              const isImage = "Image" in e;

              return (
                <li key={i} className="mb-10 ms-4">
                  <div className="absolute w-3 h-3 bg-gray-100 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                  <time className="mb-1 text-sm font-normal leading-none italic">
                    {e.Date.toLocaleDateString()}
                  </time>
                  {isImage ? (
                    <img
                      src={getLargestImageUrl(e.Image)}
                      alt=""
                      className="w-full rounded-lg mb-4 shadow-xl"
                    />
                  ) : (
                    <div>
                      <h3 className="text-lg font-semibold">{e.Title}</h3>
                      <p className="mb-4 text-base font-normal ">
                        {e.Description}
                      </p>
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </section>
    </main>
  );
}
