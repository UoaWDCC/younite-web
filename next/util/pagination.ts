"use server";

import { getQueryUrl, unwrapJsonData } from "./strapi";

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

    const json = await fetchJsonNoErr(url);
    const pagesRemaining =
      json.meta.pagination.pageCount - json.meta.pagination.page;

    const unwrappedData = unwrapJsonData(json); //TODO: note that unwrapped data has no type, it may be better to specify this.
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

  const json = await res.json();
  return json;
}
