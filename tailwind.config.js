const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{html,tsx,ts,jsx,js}'],
  darkMode: 'media',
  theme: {
    extend: {
      typography: {
        fontFamily: {
          sans: ['Sarabun', ...defaultTheme.fontFamily.sans],
          header: ['Kanit', ...defaultTheme.fontFamily.sans],
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
