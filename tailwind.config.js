/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      lato: ['Lato, sans-serif'],
      noto: ['Noto Serif Telugu, serif'],
      comforter: ['Comforter Brush, cursive'],
      pacifico: ['Pacifico, cursive'],
      mukta: ['Mukta , sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
