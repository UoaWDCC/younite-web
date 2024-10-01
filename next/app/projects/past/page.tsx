"use client";
import fetchPaginationStrapi from "@/app/test/fetchPaginationStrapi/fetchPaginationStrapi";
import Project from "@/components/projects/Project";
import { projectSchema, ProjectType } from "@/schemas/collection/Project";
import fetchStrapi from "@/util/strapi";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import { z } from "zod";

export default async function CurrentProjectPage() {
  const firstDay = new Date(new Date().getFullYear(), 0, 1);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [projectsData, setProjectsData] = useState<ProjectType[]>([]);

  const fetchProjects = async () => {
    try {
      const nextProjects = await fetchPaginationStrapi({
        pageNumber: pageNumber,
        pageSize: 5,
      });

      setProjectsData([...projectsData, ...nextProjects]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [pageNumber]);

  let projects = await fetchStrapi("project-pages", z.array(projectSchema), {
    "filters[Date][$lt]": firstDay.toISOString().split("T")[0],
  });

  if (projects.length === 0) notFound();
  return (
    <Project type={"old"} projects={projects} setPage={() => setPageNumber} />
  );
}
