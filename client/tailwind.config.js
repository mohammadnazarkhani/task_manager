/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          light: "#D6BCF5",
          DEFAULT: "#9B4DCA",
          dark: "#6B1F8E",
        },
      },
    },
  },
  plugins: [],
};
