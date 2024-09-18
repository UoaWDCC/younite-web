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
        header: "8.5rem",
        footer: "11.05rem",
      },
      padding: {
        header: "8.5rem",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
    },
    screens: {
      "xs": "500px",
      "sm":"640px",
      "md":"768px",
      "lg":"1024px",
      "xl":"1280px",
      "2xl":'1536px'
    },
  },
  plugins: [],
};
