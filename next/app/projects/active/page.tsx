import Project from "@/components/projects/Project";
import { projectSchema } from "@/schemas/collection/Project";
import fetchStrapi from "@/util/strapi";
import { notFound } from "next/navigation";
import { z } from "zod";

export default async function CurrentProjectPage() {
  const firstDay = new Date(new Date().getFullYear(), 0, 1);
  const lastDay = new Date(new Date().getFullYear(), 11, 31);

  const projects = await fetchStrapi("project-pages", z.array(projectSchema), {
    "filters[Date][$gte]": firstDay.toISOString().split("T")[0],
    "[$lte]": lastDay.toISOString().split("T")[0],
  });

  if (projects.length === 0) notFound();
  return <Project type={"current"} projects={projects} />;
}
