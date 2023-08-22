/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#d4d4d4',
        navbar: '#000',
        footer: '#000',
        primary: '#3f50b5',
        secondary: '#757ce8',
        mainGray: '#F0F0F0',
      },
    },
  },
  plugins: [],
};
