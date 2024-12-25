/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        red: {
          400: '#EF001C'
        },
        black: {
          400: '#111010',
          200: '#111010CC'
        }
      }
    },
    fontFamily: {
      everett: ["Everett"]
    }
  },
  plugins: [],
}
