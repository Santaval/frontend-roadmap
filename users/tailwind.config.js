const {nextui} = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./public/**/*.{html,js,jsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  plugins: [nextui()],
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
};
