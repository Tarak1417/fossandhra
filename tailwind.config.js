/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './assets/**/*.{jpg,png,svg}', // Add this line if needed
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

