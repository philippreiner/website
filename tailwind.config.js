module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        planb: '#ff5100',
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
