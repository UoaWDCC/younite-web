type StrapiJson<T> = {
  data: { attributes: T } | { attributes: T }[]; // Could be a Strapi single or collection type
  error?: {
    status: number;
    name: string;
    message: string;
  };
};

/**
 * Fetches data from the Strapi API
 *
 * @param endpoint - The endpoint to fetch from
 * @param query - The query parameters to add to the url
 * @returns The unwrapped data from the API
 * @throws Error if the API returns an error
 */
export default async function fetchStrapi<T>(
  content: string,
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
  if (Array.isArray(data)) {
    return data.map((item: { attributes: T }) => item.attributes) as T;
  } else {
    return data.attributes as T;
  }
}
