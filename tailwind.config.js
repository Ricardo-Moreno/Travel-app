/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'custom-black': '#484848',
        'custom-salmon': '#FF5A5F',

      },
    },
  },
  plugins: [],
}

