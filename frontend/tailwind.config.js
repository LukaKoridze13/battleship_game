/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#333333',
        white: '#f2f2f2',
      },
      height: {
        screen: '100dvh',
      },
    },
  },
  plugins: [],
};
