import { ProjectType } from "@/schemas/collection/Project";
import { fetchPaginationStrapi } from "./pagination";

export default async function getFirstProject(
  pageNumber: number,
  pageSize: number,
  firstDay: Date,
  lastDay: Date,
  sort: String,
): Promise<ProjectType[] | undefined> {
  const data = await fetchPaginationStrapi(
    pageNumber,
    2,
    firstDay,
    lastDay,
    sort,
  );

  if (data) {
    return data.projects as ProjectType[];
  }
  return undefined;
}
