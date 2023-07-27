export const getLargestImage = (img: any) => {
	const formats = img.data.attributes.formats;

	const largestFormat =
		formats.large || formats.medium || formats.small || formats.thumbnail;

	return `http://localhost:1337${largestFormat.url}`;
};
