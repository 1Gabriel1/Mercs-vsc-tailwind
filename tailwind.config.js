/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        body: ['Open Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

