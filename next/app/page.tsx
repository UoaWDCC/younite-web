import event1 from "@/assets/home/event1.png";
import ImageWithText from "@/components/blocks/ImageWithText";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import CarouselBase from "@/components/home/CarouselBase";
import HomePageBlobs from "@/components/home/HomePageBlob";
import BGWaves from "@/components/svg/BGWaves";
import { homePageSchema } from "@/schemas/single/HomePage";
import fetchStrapi from "@/util/strapi";
import Image from "next/image";
import styles from "./page.module.css";

export default async function Home() {
  const data = await fetchStrapi("home-page", homePageSchema);

  return (
    <>
      <BGWaves className="w-full absolute -z-50 top-[85vh]" />
      {/* @ts-ignore */}
      <Header />
      <div className="min-h-[55vh] flex flex-col items-center gap-6 mt-header pt-24">
        <h1 className="uppercase flex flex-col items-center mx-auto justify-center">
          <span className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl leading-[0.95] text-center">A Youth Board</span>
          <span className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold leading-[0.95] text-center">
            For The Future
          </span>
        </h1>
        <p className="text-sm xs:text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl max-w-[50ch] text-center mb-16 leading-relaxed">
          {data.heroParagraph}
        </p>
      </div>
      <HomePageBlobs blob1={data.blob1} blob2={data.blob2} blob3={data.blob3} />

      <ImageWithText props={data.textWithImage} />
      <div>
        <div className="bg-white bg-opacity-50">
          <div className="overflow-hidden ml-20 mr-20 ">
            <CarouselBase
              wrapperClass="flex pt-24 pb-40 w-full m-0"
              innerClass="gap-8"
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="w-60 h-64 rounded-xl text-blue-800 overflow-hidden"
                >
                  <div className={`h-48 relative -mb-2 -z-10`}>
                    <Image src={event1} fill alt="event1" />
                  </div>
                  <div className="h-16" style={{ backgroundColor: "white" }}>
                    <div className="pl-3 pt-1.5 font-semibold text-lg">
                      Rainbow High Tea
                    </div>
                    <div className="pl-3 text-base">3rd May 2023</div>
                  </div>
                </div>
              ))}
            </CarouselBase>
          </div>
        </div>
      </div>
    </>
  );
}
