"use client";
// import fetchPaginationStrapi from "@/app/test/fetchPaginationStrapi/fetchPaginationStrapi";
import Project from "@/components/projects/Project";
import { ProjectType } from "@/schemas/collection/Project";
import { fetchPaginationStrapi } from "@/util/strapi";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

export default function CurrentProjectPage() {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [projectsData, setProjectsData] = useState<ProjectType[]>([]);
  const [nextPageAvailable, setNextPageAvailable] = useState<boolean>(true);

  const firstDay = new Date(new Date().getFullYear(), 0, 1);
  const lastDay = new Date(new Date().getFullYear(), 11, 31);

  async function fetchNextProjects() {
    try {
      const nextProjects = await fetchPaginationStrapi(pageNumber, 2, {
        "filters[Date][$gte]": firstDay.toISOString().split("T")[0],
        "[$lte]": lastDay.toISOString().split("T")[0],
      });

      console.log("next projects: ");
      console.log(nextProjects);

      if (nextProjects.length === 0) {
        setNextPageAvailable(false);
      }

      setProjectsData([...projectsData, ...nextProjects]);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    async function getFirstProjects() {
      const firstProjects = await fetchPaginationStrapi({
        pageNumber: 1,
        pageSize: 2,
      });
      setProjectsData(firstProjects);
    }

    if (pageNumber === 1) {
      getFirstProjects();
    }

    fetchNextProjects();
  }, [pageNumber]);

  function addPageNumber() {
    setPageNumber(pageNumber + 1);
  }

  if (!projectsData) notFound();

  return (
    <Project
      type={"current"}
      projects={projectsData}
      setPage={addPageNumber}
      nextPageAvailable={nextPageAvailable}
    />
  );
}
