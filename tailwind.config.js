/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html, js}"],
  theme: {
    extend: {
      screens: {
        'xl': '1230px',
        // => @media (min-width: 1230px) { ... }
        '2xl': '1345px',
      // => @media (min-width: 1345px) { ... }
      },
    },
  },
  plugins: [],
}

