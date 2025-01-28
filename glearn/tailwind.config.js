/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx', // Specific to `.tsx` files
    './index.html',   // Root HTML file
  ],
  theme: {
    extend: {display: ['responsive']},
  },
  plugins: [],
};
