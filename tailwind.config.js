/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0c1e3f',
          950: '#060f20',
        },
        gold: {
          400: '#d4af37',
          500: '#c5a028',
          600: '#b8941f',
        },
      },
    },
  },
  plugins: [],
};
