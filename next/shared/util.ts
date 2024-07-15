export const getLargestImage = (img: any) => {
  try {
    const formats = img.data.attributes.formats;

    const largestFormat =
      formats.large || formats.medium || formats.small || formats.thumbnail;

    return `${process.env.STRAPI_URL}${largestFormat.url}`;
  } catch {
    return '';
  }
};
