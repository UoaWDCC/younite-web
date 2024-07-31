/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        gutter: "var(--gutter)",
      },
      gridTemplateColumns: {
        14: "var(--gutter) repeat(12, minmax(0, 1fr)) var(--gutter)",
      },
      colors: {
        "b-dark-blue": "#1C4683",
        "b-blue": "#6CC3E5",
        "b-light-blue": "#A3D9EF",
        "b-orange": "#FAAB36",
        "b-light-orange": "#FABD6E",
      },
      margin: {
        unheader: "-8.5rem",
      },
    },
  },
  plugins: [],
};
