import { ImageType } from "@/schemas/Image";

export const getLargestImageUrl = (img: ImageType) => {
  const { large, medium, small, thumbnail } = img.data.attributes.formats;
  const largestFormat = large ?? medium ?? small ?? thumbnail ?? { url: "" };
  const isRelativeUrl = process.env.NODE_ENV === "development";
  const baseUrl = isRelativeUrl ? "" : process.env.STRAPI_URL;
  return `${baseUrl}${largestFormat.url}`;
};
