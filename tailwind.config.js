module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        planb: '#FF5100',
        primary: '#001AFF',
        secondary: '#A300FF'
      }
    },
    container: {
      center: false,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
