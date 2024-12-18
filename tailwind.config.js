/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      'main': ['"Noto Serif JP"'],
      'secondary': ['Montserrat']
    },
    extend: {
      colors: {
        "special": "#244D4D",
        "grey-list": "#64717C",
        "grey-secondary": "#5F5F64",
        "grey-secondary-title": "#3D3D3F",
      },
    },
  },
  plugins: [],
};
