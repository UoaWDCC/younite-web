import ImageWithText from "@/components/blocks/ImageWithText";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import HomePageBlobs from "@/components/home/HomePageBlob";
import BGWaves from "@/components/svg/BGWaves";
import { projectSchema } from "@/schemas/collection/Project";
import { homePageSchema } from "@/schemas/single/HomePage";
import fetchStrapi from "@/util/strapi";
import Image from "next/image";
import styles from "./page.module.css";
import ProjectsCarousel from "@/components/home/carousel/ProjectsCarousel";
import { z } from "zod";


export default async function Home() {
  const data = await fetchStrapi("home-page", homePageSchema);

  // active projects --uncomment here
  const firstDay = new Date(new Date().getFullYear(), 0, 1);
  const lastDay = new Date(new Date().getFullYear(), 11, 31);

  const projects = await fetchStrapi("project-pages", z.array(projectSchema), {
    "filters[Date][$gte]": firstDay.toISOString().split("T")[0],
    "[$lte]": lastDay.toISOString().split("T")[0],
  });

  return (
    <>
      <BGWaves className="w-full absolute -z-50 top-[85vh]" />
      <div className="min-h-[55vh] flex flex-col items-center gap-6 mt-header pt-24">
        <h1 className="uppercase flex flex-col items-center mx-auto justify-center">
          <span className="text-2xl xs:text-3xl sm:text-4xl lg:text-6xl xl:text-8xl leading-[0.95] text-center">
            A Youth Board
          </span>
          <span className="text-3xl xs:text-4xl sm:text-5xl lg:text-7xl xl:text-9xl font-bold leading-[0.95] text-center">
            For The Future
          </span>
        </h1>
        <p className="text-sm xs:text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl max-w-[50ch] text-center mb-16 leading-relaxed">
          {data.heroParagraph}
        </p>
      </div>
      <HomePageBlobs blob1={data.blob1} blob2={data.blob2} blob3={data.blob3} />

      <ImageWithText props={data.textWithImage} />

      <ProjectsCarousel projects={projects} />
    </>
  );
}
