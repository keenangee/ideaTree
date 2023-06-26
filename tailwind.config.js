/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        darkest: "#322820",
        dark: "#695B49",
        primary: "#36f000",
        light: "#82A391",
        lightest: "#C2E8FF",
      },
    },
  },
  plugins: [],
};
