import { ImageType } from "@/schemas/Image";

export const getLargestImageUrl = (img: ImageType) => {
  const { large, medium, small, thumbnail } = img.data.attributes.formats;
  const largestFormat = large ?? medium ?? small ?? thumbnail ?? { url: "" };
  return `${process.env.STRAPI_URL}${largestFormat.url}`;
};
