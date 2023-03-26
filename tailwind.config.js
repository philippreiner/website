const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['"DM Sans"', 'system-ui', 'Roboto','sans-serif'],
    },
    extend: {
      colors: {
        planb: '#ff5100',
        primary: '#00069A', //#2400FF,#001AFF,3E82B9
        highlight: '#32E178',
        secondary: '#A300FF',
        primarylight: '#3347FF',
        'paper': {
          DEFAULT: '#F7F4EF',
          '50': '#FFFFFE',
          '100': '#FCFBF9',
          '200': '#F7F4EF',
          '300': '#EBE4D7',
          '400': '#DFD3BF',
          '500': '#D3C3A8',
          '600': '#C7B390',
          '700': '#BCA278',
          '800': '#B09260',
          '900': '#9D804F'
        },
      }
    },
    container: {
      center: false,
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
