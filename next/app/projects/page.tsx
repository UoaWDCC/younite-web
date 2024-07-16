import styles from "@/app/page.module.css";
import Header from "@/components/header/header";
import { projectSchema } from "@/schemas/collection/Project";
import { projectsPageSchema } from "@/schemas/single/ProjectsPage";
import { getLargestImageUrl } from "@/util/image";
import fetchStrapi from "@/util/strapi";
import Link from "next/link";
import { z } from "zod";

export default async function ProjectsPage() {
  const projectsPage = await fetchStrapi("projects-page", projectsPageSchema);
  const projects = await fetchStrapi("project-pages", z.array(projectSchema));

  return (
    <main className={styles.main}>
      <div className="absolute top-0 w-full z-50">
        {/* @ts-ignore */}
        <Header />
      </div>
      <section className="h-[85vh] flex flex-col items-center justify-center relative">
        <img
          src={getLargestImageUrl(projectsPage.BackgroundImage)}
          alt=""
          className="absolute inset-0 -z-10 object-cover w-full h-full brightness-50"
        />
        <h1 className="uppercase flex flex-col items-center mx-auto mb-6 text-8xl font-bold leading-[0.95]">
          Projects
        </h1>
        <p className="max-w-[55ch] mb-20">{projectsPage.Subtitle}</p>
      </section>
      <div>
        {projects.map((p) => (
          <div
            key={p.slug}
            className="relative py-40 flex pl-16 pr-16 justify-between items-center"
          >
            <img
              src={getLargestImageUrl(p.image)}
              alt=""
              className="absolute inset-0 -z-10 w-full h-full object-cover brightness-50"
            />
            <div className="absolute left-8 top-0 h-full w-[1px] bg-white" />

            <span className="bg-white px-6 py-3 rounded-full font-bold text-b-dark-blue h-fit">
              {new Date(p.Date).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <div className="max-w-[55ch]">
              <Link
                className="font-bold text-5xl mb-6 block"
                href={`/projects/${p.slug}`}
              >
                {p.title}
              </Link>
              <p className="mb-4">{p.Description}</p>
              <Link
                className="ml-auto underline italic block"
                href={`/projects/${p.slug}`}
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
