import ContentBlock from "@/components/blocks/ContentBlock";
import PreviousProjects from "@/components/projects/PreviousProjects";
import YearProjects from "@/components/projects/YearProjects";
import { projectSchema } from "@/schemas/collection/Project";
import fetchStrapi from "@/util/strapi";
import { notFound } from "next/navigation";
import { z } from "zod";

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  let projects = null;
  let firstDay = new Date(new Date().getFullYear(), 0, 1);
  let lastDay = new Date(new Date().getFullYear(), 11, 31);

  if (params.slug === JSON.stringify(new Date().getFullYear())) {
    projects = await fetchStrapi("project-pages", z.array(projectSchema), {
      "filters[Date][$gte]": firstDay.toISOString().split("T")[0],
      "[$lte]": lastDay.toISOString().split("T")[0],
    });
    return <YearProjects year={parseInt(params.slug)} projects={projects} />;
  } else {
    projects = await fetchStrapi("project-pages", z.array(projectSchema), {
      "filters[Date][$lte]": lastDay.toISOString().split("T")[0],
    });
    return <PreviousProjects projects={projects}/>
  }

  const project = projects[0];
  if (!project) notFound();

  return project.blocks.map((block: any) => ContentBlock({ props: block }));
}
