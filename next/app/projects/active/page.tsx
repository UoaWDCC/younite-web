"use client";
import Project from "@/components/projects/Project";
import { ProjectType } from "@/schemas/collection/Project";
import { fetchPaginationStrapi } from "@/util/pagination";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

export default function CurrentProjectPage() {
  const firstDay = new Date(new Date().getFullYear(), 0, 1);
  const lastDay = new Date(new Date().getFullYear(), 11, 31);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [projectsData, setProjectsData] = useState<ProjectType[]>([]);
  const [nextPageAvailable, setNextPageAvailable] = useState<boolean>(true);

  async function fetchNextProjects() {
    try {
      const test = await fetchPaginationStrapi(
        pageNumber,
        2,
        firstDay,
        lastDay,
      );

      if (test?.pagesRemaining === 0) {
        setNextPageAvailable(false);
      }

      setProjectsData([
        ...projectsData,
        ...(test?.unwrappedData as ProjectType[]),
      ]);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    async function getFirstProjects() {
      const test = await fetchPaginationStrapi(
        pageNumber,
        2,
        firstDay,
        lastDay,
      );

      console.log("fetch return: " + test?.unwrappedData, test?.pagesRemaining);

      if (test?.unwrappedData) {
        setProjectsData(test?.unwrappedData as ProjectType[]);
      }
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
      nextPageAvailable={nextPageAvailable}
      setPage={addPageNumber}
    />
  );
}
