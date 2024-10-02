import { projectSchema } from "@/schemas/collection/Project";
import { emailSchema } from "@/schemas/single/Email";
import { z, ZodError } from "zod";

// Complicated type to account for Strapi either being a single or collection type
type SingleOrCollection<T> = T extends any[]
  ? { attributes: T extends (infer U)[] ? U : never }[]
  : { attributes: T };

type StrapiJson<T> = {
  data: SingleOrCollection<T>;
  error?: {
    status: number;
    name: string;
    message: string;
  };
};

/**
 * Fetches data from the Strapi API
 *
 * @param content - The Strapi content type to fetch
 * @param query - The query parameters to add to the url
 * @returns The (unwrapped) data from the API
 * @throws Error if the API returns an error or the data does not match the schema
 */
export default async function fetchStrapi<T>(
  content: string,
  schema: z.ZodType<T>,
  query: Record<string, string> = {},
): Promise<T> {
  const url = getQueryUrl(content, query);
  const json = await fetchJson<T>(url);
  const unwrappedData = unwrapJsonData<T>(json);
  return schema.parse(unwrappedData);
}

export async function fetchPaginationStrapi<T>(
  pageNumber: number,
  pageSize: number,
  query: Record<string, string> = {},
) {
  const firstDay = new Date(new Date().getFullYear(), 0, 1);
  const lastDay = new Date(new Date().getFullYear(), 11, 31);
  //note: this value for less and greater than needs to be changed depending on what is querying this!
  const url = getQueryUrl("projects-pages", {
    "filters[Date][$gte]": firstDay.toISOString().split("T")[0],
    "[$lte]": lastDay.toISOString().split("T")[0],
    "pagination[page]": pageNumber.toString(),
    "pagination[pageSize]": pageSize.toString(),
  });
  const json = await fetchJson<T>(url);
  const pagesRemaining = json.meta.pagination.total;
  const unwrappedData = unwrapJsonData(json);
  const nextProjects = projectSchema.parse(unwrappedData);
  return { nextProjects, pagesRemaining };
}

function getQueryUrl(content: string, query: Record<string, string>) {
  const url = new URL(`${process.env.STRAPI_URL}/api/${content}`);
  url.searchParams.append("populate", "deep,10"); // Populate all fields
  Object.entries(query).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });
  return url.toString();
}

async function fetchJson<T>(url: string) {
  // Fetch data from Strapi API
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_KEY}`,
    },
    cache: "no-cache", // For development only
  });

  // Get JSON data from response and check for errors
  const json = await res.json(); //as StrapiJson<T>
  if (json.error) {
    throw new Error(`${json.error.status} ${json.error.message}`);
  }
  return json;
}

function unwrapJsonData<T>(json: StrapiJson<T>) {
  const data = json.data;
  const unwrappedData = Array.isArray(data)
    ? data.map((item) => item.attributes)
    : data.attributes;
  return unwrappedData;
}

export async function sendEmail<T>(name: string, email: string, body: string) {
  const url = new URL(`${process.env.STRAPI_URL}/api/email`);

  const data = { name: name, senderEmail: email, body: body };

  try {
    const verifySchema = emailSchema.parse(data);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.STRAPI_KEY}`,
      },
      cache: "no-cache", // For development only
      body: JSON.stringify({ name: name, senderEmail: email, body: body }),
    });

    return response.status;
  } catch (err) {
    if (err instanceof ZodError) {
      return 400;
    }
  }
}
