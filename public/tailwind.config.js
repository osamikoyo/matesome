/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        primaryBackground: "#09090B",
        primaryForeground: "#FAFAFA",
        darkerBackground: "#08080A",
        grayForeground: "#a1a1aa",
        someGrayBackground: "#18181B",
        someGray: "#535354"
      },
    },
  },
  plugins: [],
};
