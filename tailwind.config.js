const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        planb: '#ff5100',
        primary: '#2400FF', //#001AFF,3E82B9
        secondary: '#A300FF',
        primarylight: '#3347FF'
      }
    },
    container: {
      center: false,
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
