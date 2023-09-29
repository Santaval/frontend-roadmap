/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./public/**/*.{html,js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#d81159",
        secondary: "#353535",
        "text-color": "#000000",
        "text-color-secondary": "#ffffff",
        "text-gray": "#8a8a8a",
      },
    },

  },
  plugins: [],
}