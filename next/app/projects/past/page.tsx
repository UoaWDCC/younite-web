import Project from "@/components/projects/Project";
import { projectSchema } from "@/schemas/collection/Project";
import fetchStrapi from "@/util/strapi";
import { notFound } from "next/navigation";
import { z } from "zod";

export default async function CurrentProjectPage() {
  const firstDay = new Date(new Date().getFullYear(), 0, 1);

  const projects = await fetchStrapi("project-pages", z.array(projectSchema), {
    "filters[Date][$lt]": firstDay.toISOString().split("T")[0],
  });

  console.log(projects);
  console.log('projects');

  if (projects.length === 0) notFound();
  return <Project type={"old"} projects={projects} />;
}
