/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      deep: "#2c2a4a",
      white: "#ffffff",
      black: "#000000",
      "light-purple": "#dabfff",
      "color-2": "#4f518c",
      "color-3": "#2c0735",
      transparent: "rgba(0, 0, 0, 0)",
      red: "#c90000",
      modal: "rgba(0, 0, 0, 0.3)",
    },
  },
  plugins: [],
};
