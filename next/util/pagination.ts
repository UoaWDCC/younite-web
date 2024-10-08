"use server";

import { getQueryUrl, unwrapJsonData } from "./strapi";

export async function fetchPaginationStrapi(
  pageNumber: number,
  pageSize: number,
  firstDay: Date,
  lastDay: Date,
) {
  try {
    const url = getQueryUrl("project-pages", {
      "filters[Date][$gte]": firstDay.toISOString().split("T")[0],
      "[$lte]": lastDay.toISOString().split("T")[0],
      "pagination[page]": pageNumber.toString(),
      "pagination[pageSize]": pageSize.toString(),
    });
    console.log("url: " + url);

    const json = await fetchJsonNoErr(url);
    const pagesRemaining =
      json.meta.pagination.pageCount - json.meta.pagination.page;

    const unwrappedData = unwrapJsonData(json);
    return { unwrappedData, pagesRemaining };
  } catch (err) {
    console.log(err);
  }
}

async function fetchJsonNoErr(url: string) {
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_KEY}`,
    },
    cache: "no-cache", // For development only
  });

  // Get JSON data from response and check for errors
  const json = await res.json(); //as StrapiJson<T>
  return json;
}
