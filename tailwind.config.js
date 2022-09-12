module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  themes: [],
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
