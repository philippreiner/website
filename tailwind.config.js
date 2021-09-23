const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        planb: '#ff5100',
        primary: '#3E82B9', //#001AFF
        secondary: '#A300FF',
        primarylight: '#3347FF',
        'blue-gray': colors.blueGray
      }
    },
    container: {
      center: false,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
