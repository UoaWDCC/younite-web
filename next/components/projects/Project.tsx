"use client";
import { ProjectType } from "@/schemas/collection/Project";
import { fetchPaginationStrapi } from "@/util/pagination";
import { useEffect, useState } from "react";
import BGBlob from "../svg/BGBlob";
import SeeMore from "./SeeMore";
import Timeline from "./Timeline";

export default function Project({
  type,
  firstDay,
  lastDay,
  sort,
  firstProject,
}: {
  type: "current" | "old";
  firstDay: Date;
  lastDay: Date;
  sort: "ASC" | "DESC";
  firstProject: ProjectType[] | undefined;
}) {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [projectsData, setProjectsData] = useState<ProjectType[] | undefined>(
    firstProject,
  );
  const [nextPageAvailable, setNextPageAvailable] = useState<boolean>(true);

  async function getNextProjects() {
    try {
      if (nextPageAvailable) {
        const data = await fetchPaginationStrapi(
          pageNumber,
          2,
          firstDay,
          lastDay,
          sort,
        );

        if (data?.pagesRemaining === 0) {
          setNextPageAvailable(false);
        }

        if (projectsData) {
          setProjectsData([
            ...projectsData,
            ...(data?.projects as ProjectType[]),
          ]);
        }
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (pageNumber != 1) {
      getNextProjects();
    }
  }, [pageNumber]);

  function addPageNumber() {
    setPageNumber(pageNumber + 1);
  }

  return (
    <div className="h-full w-full">
      <div className="absolute -z-10 top-[60%] w-1/6 -left-44">
        <BGBlob />
      </div>
      <div className="mt-header">
        <div className="max-w-4xl mx-auto mt-header pt-24 flex flex-col items-center text-center">
          {type == "current" ? (
            <p className="md:text-8xl sm:text-7xl text-5xl font-bold leading-[0.95] uppercase mb-6">
              ACTIVE PROJECTS
            </p>
          ) : (
            <p className="md:text-8xl sm:text-7xl text-5xl font-bold leading-[0.95] uppercase mb-6">
              PAST PROJECTS
            </p>
          )}
          <div className="max-w-4xl">
            <p className="text-base p-10 text-wrap">
              A group of young people eager to enact growing change in the
              Devonport Takapuna comunity following in youth voices and youth
              leadership.
            </p>
          </div>
        </div>
      </div>
      <div>
        {projectsData ? (
          <Timeline timelineElements={projectsData} type={type} />
        ) : (
          <p className="md:text-3xl sm:text-7xl text-5xl font-bold leading-[0.95] mb-6 text-center">
            No projects found!
          </p>
        )}
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <SeeMore
          loadMore={addPageNumber}
          nextPageAvailable={nextPageAvailable}
        />
      </div>
    </div>
  );
}
