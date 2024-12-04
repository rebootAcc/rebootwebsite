/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/templates/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4385F5",
        secondary: "#666",
      },
      screens: {
        xs: "280px",
        sm: "330px",
        md: "768px",
        lg: "1024px",
        xlg: "1280px",
        xl: "1400px",
        xxl: "1780px",
      },
    },
  },
  plugins: [],
};
