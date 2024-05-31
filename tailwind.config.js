/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '4rem',
      },
      colors: {
        'red-pro': '#E62B4A',
      },
    },
  },
  plugins: [],
};
