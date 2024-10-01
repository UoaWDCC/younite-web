"use server";
import { projectSchema } from "@/schemas/collection/Project";
import fetchStrapi from "@/util/strapi";
import { z } from "zod";

export default async function fetchPaginationStrapi({
  pageNumber,
  pageSize,
}: {
  pageNumber: number;
  pageSize: number;
}) {
  const firstDay = new Date(new Date().getFullYear(), 0, 1);
  const lastDay = new Date(new Date().getFullYear(), 11, 31);

  return await fetchStrapi("project-pages", z.array(projectSchema), {
    "filters[Date][$gte]": firstDay.toISOString().split("T")[0],
    "[$lte]": lastDay.toISOString().split("T")[0],
    "pagination[page]": pageNumber.toString(),
    "pagination[pageSize]": pageSize.toString(),
  });
}
