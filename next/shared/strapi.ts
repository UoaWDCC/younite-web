import { z } from "zod";

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
  query: Record<string, string> = {}
): Promise<T> {
  // Generate the query URL
  const url = new URL(`${process.env.STRAPI_URL}/api/${content}`);
  url.searchParams.append("populate", "*"); // Populate all fields
  Object.entries(query).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });

  // Fetch from strapi
  const res = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_KEY}`,
    },
    cache: "no-cache",
  });

  // Get JSON data from response and check for errors
  const json = (await res.json()) as StrapiJson<T>;
  if (json.error) {
    throw new Error(`${json.error.status} ${json.error.message}`);
  }

  // Unwrap the data
  const data = json.data;
  const unwrappedData = Array.isArray(data)
    ? data.map((item) => item.attributes)
    : data.attributes;

  // Validate the data
  return schema.parse(unwrappedData);
}
