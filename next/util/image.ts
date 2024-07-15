import { ImageType } from "@/schemas/Image";

export const getLargestImageUrl = (img: ImageType) => {
  try {
    const formats = img.data.attributes.formats;

    const largestFormat = formats.large ??
      formats.medium ??
      formats.small ??
      formats.thumbnail ?? { url: "" };

    return `${process.env.STRAPI_URL}${largestFormat.url}`;
  } catch {
    return process.env.STRAPI_URL;
  }
};
