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
}: {
  type: "current" | "old";
  firstDay: Date;
  lastDay: Date;
  sort: "ASC" | "DESC";
}) {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [projectsData, setProjectsData] = useState<ProjectType[]>([]);
  const [nextPageAvailable, setNextPageAvailable] = useState<boolean>(true);

  async function getNextProjects() {
    try {
      const data = await fetchPaginationStrapi(
        pageNumber,
        2,
        firstDay,
        lastDay,
        sort
      );

      if (data?.pagesRemaining === 0) {
        setNextPageAvailable(false);
      }

      setProjectsData([
        ...projectsData,
        ...(data?.unwrappedData as ProjectType[]),
      ]);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    async function getFirstProjects() {
      const data = await fetchPaginationStrapi(
        pageNumber,
        2,
        firstDay,
        lastDay,
        sort
      );

      //TODO: this needs to be fixed so that data.unwrappedData and data.pagesRemaining always exists. (IE: We do not want the optional chaining operator)
      console.log("fetch return: " + data?.unwrappedData, data?.pagesRemaining);

      if (data?.unwrappedData) {
        setProjectsData(data?.unwrappedData as ProjectType[]);
      }
    }

    if (pageNumber === 1) {
      getFirstProjects();
    }

    getNextProjects();
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
        <div className="flex flex-col items-center justify-center text-center w-full">
          {type == "current" ? (
            <p className="text-6xl font-bold leading-[0.95]">ACTIVE PROJECTS</p>
          ) : (
            <p className="text-6xl font-bold leading-[0.95]">PAST PROJECTS</p>
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
        <Timeline timelineElements={projectsData} />
      </div>
      <div className="flex flex-col items-center justify-center text-center w-full m-5">
        <SeeMore
          loadMore={addPageNumber}
          nextPageAvailable={nextPageAvailable}
        />
      </div>
    </div>
  );
}
