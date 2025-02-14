/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/js/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        'lg-custom': '820px',
      },
    },
  },
  darkMode: "className",
  plugins: [require("tw-elements/plugin.cjs")],
};