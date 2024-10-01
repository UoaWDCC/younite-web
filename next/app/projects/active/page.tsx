"use client";
import fetchPaginationStrapi from "@/app/test/fetchPaginationStrapi/fetchPaginationStrapi";
import Project from "@/components/projects/Project";
import { ProjectType } from "@/schemas/collection/Project";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

export default function CurrentProjectPage() {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [projectsData, setProjectsData] = useState<ProjectType[]>([]);
  const [nextPageAvailable, setNextPageAvailable] = useState<boolean>(true);
  const fetchProjects = async () => {
    try {
      const nextProjects = await fetchPaginationStrapi({
        pageNumber: pageNumber,
        pageSize: 2,
      });

      if (nextProjects.length === 0) {
        setNextPageAvailable(false);
      }

      setProjectsData([...projectsData, ...nextProjects]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProjects();
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
