import styles from "@/app/page.module.css";
import ContentBlock from "@/components/blocks/ContentBlock";
import Header from "@/components/header/header";
import { projectSchema } from "@/schemas/collection/Project";
import fetchStrapi from "@/util/strapi";
import { notFound } from "next/navigation";
import { z } from "zod";

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const projects = await fetchStrapi("project-pages", z.array(projectSchema), {
    "filters[slug][$eq]": params.slug,
  });

  const project = projects[0];
  if (!project) notFound();

  return (
    <main className={styles.main}>
      {/* @ts-ignore */}
      <Header />
      <div>
        {project.blocks.map((block: any) => ContentBlock({ props: block }))}
      </div>
    </main>
  );
}
