/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			spacing: {
				gutter: "var(--gutter)",
			},
			gridTemplateColumns: {
				14: "var(--gutter) repeat(12, minmax(0, 1fr)) var(--gutter)",
			},
		},
	},
	plugins: [],
};
