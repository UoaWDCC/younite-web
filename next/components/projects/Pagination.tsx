"use client"
import { useState, useEffect } from 'react';
import fetchPaginationStrapi from '@/app/test/fetchPaginationStrapi/fetchPaginationStrapi';
import { ProjectType } from '@/schemas/collection/Project';

export const usePagination = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [projectsData, setProjectsData] = useState<ProjectType[]>([]);
  const [nextPageAvailable, setNextPageAvailable] = useState<boolean>(true);

  const fetchProjects = async () => {
    try {
      const nextProjects = await fetchPaginationStrapi({
        pageNumber: pageNumber,
        pageSize: 2,
      });

      console.log("next projects: " + nextProjects);

      if (nextProjects.length === 0) {
        setNextPageAvailable(false);
      }

      setProjectsData([...projectsData, ...nextProjects]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    async function getFirstProjects() {
      console.log("get first projects");
      const firstProjects = await fetchPaginationStrapi({
        pageNumber: 1,
        pageSize: 2,
      });
      setProjectsData(firstProjects);
    }

    if (pageNumber === 1) {
      getFirstProjects();
    }

    fetchProjects();
  }, [pageNumber]);

  // useEffect(() => {

  // }, []);

  function addPageNumber() {
    setPageNumber(pageNumber + 1);
  }

  return {addPageNumber, fetchProjects}
}