"use server";

import { projectSchema } from "@/schemas/collection/Project";
import { z } from "zod";
import { getQueryUrl } from "./strapi";

const psArray = z.array(projectSchema);

type fetchPaginationReturn = {
  projects: z.infer<typeof psArray>;
  pagesRemaining: number;
};

export async function fetchPaginationStrapi(
  pageNumber: number,
  pageSize: number,
  firstDay: Date,
  lastDay: Date,
  sort: String,
): Promise<fetchPaginationReturn | undefined> {
  try {
    //TODO: if possible, try to make first and last day optional, and make it so that either or can be applied (this means we don't have to make a ridiculous range for the date when calculating past and active projects)
    const url = getQueryUrl("project-pages", {
      "filters[Date][$gte]": firstDay.toISOString().split("T")[0] ?? "",
      "filters[Date][$lte]": lastDay.toISOString().split("T")[0] ?? "",
      "pagination[page]": pageNumber.toString(),
      "pagination[pageSize]": pageSize.toString(),
      sort: `Date:${sort}`,
    });

    const json = await fetchJsonWithMeta(url);
    const pagesRemaining =
      json.meta.pagination.pageCount - json.meta.pagination.page;

    const schema = await addPaginationType(projectSchema);
    let parsedData = schema.parse(json);

    const projects = psArray.parse(
      parsedData.data.map((e) => e.attributes),
    ) as z.infer<typeof psArray>;

    return { projects, pagesRemaining };
  } catch (err) {
    console.error(err);
  }
}

async function fetchJsonWithMeta(url: string) {
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_KEY}`,
    },
    cache: "no-cache", // For development only
  });

  const json = await res.json();
  return json;
}

async function addPaginationType<T>(schema: z.ZodType<T>) {
  let schemaArray = z.object({
    data: z.array(
      z.object({
        id: z.number(),
        attributes: schema,
      }),
    ),
    meta: z.object({
      pagination: z.object({
        page: z.number(),
        pageSize: z.number(),
        pageCount: z.number(),
        total: z.number(),
      }),
    }),
  });

  return schemaArray;
}