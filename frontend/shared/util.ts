export const apiURL =
  process.env.NODE_ENV === 'production'
    ? 'https://edit.younite.wdcc.co.nz'
    : 'http://localhost:1337';

console.log('apiURL', apiURL);

export const getLargestImage = (img: any) => {
  const formats = img.data.attributes.formats;

  const largestFormat =
    formats.large || formats.medium || formats.small || formats.thumbnail;

  return `${apiURL}${largestFormat.url}`;
};
