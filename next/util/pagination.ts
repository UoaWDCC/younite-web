"use server";

import { projectSchema } from "@/schemas/collection/Project";
import { z } from "zod";
import { getQueryUrl } from "./strapi";

export async function fetchPaginationStrapi(
  pageNumber: number,
  pageSize: number,
  firstDay: Date,
  lastDay: Date,
  sort: String,
) {
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

    const addBlocksToSchema = projectSchema.extend({
      blocks: z.any().array(),
    });

    const schema = await addPaginationType(projectSchema);

    // const unwrappedData = unwrapJsonData(json) as ; //TODO: note that unwrapped data has no type, it may be better to specify this.

    let parsedData = schema.parse(json);

    return { parsedData, pagesRemaining };
  } catch (err) {
    console.log(err);
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