/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.mdx',
    './components/**/*.jsx',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-dark': 'url(/themes/dark/hero.webp)',
        'hero-light': 'url(/themes/light/hero.webp)',
      },
      content: {
        'chr-dark': "url('/themes/dark/chr.webp')"
      }
    },
  },
  plugins: [
    require("@midudev/tailwind-animations"),
    require("tailwind-gradient-mask-image")
  ],
  darkMode: "class"
}
