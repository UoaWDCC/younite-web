export const apiURL = process.env.STRAPI_URL;

export const getLargestImage = (img: any) => {
  try {
    const formats = img.data.attributes.formats;

    const largestFormat =
      formats.large || formats.medium || formats.small || formats.thumbnail;

    return `${apiURL}${largestFormat.url}`;
  } catch {
    return '';
  }
};
