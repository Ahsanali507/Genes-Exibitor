/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        zen: ['"Zen Kaku Gothic Antique"', 'sans-serif'],
      },
      maxWidth: {
        '470px': '470px',
      },
    },
  },
  plugins: [],
}

