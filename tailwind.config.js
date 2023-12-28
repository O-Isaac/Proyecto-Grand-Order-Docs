/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.mdx',
    './components/**/*.jsx',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-animated")
  ],
  darkMode: "class"
}
