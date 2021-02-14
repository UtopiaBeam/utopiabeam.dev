const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{html,tsx,ts,jsx,js}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        terminal: '#00ff66',
      },
      fontFamily: {
        sans: ['Sarabun', ...defaultTheme.fontFamily.sans],
        header: ['Noto Sans Thai', ...defaultTheme.fontFamily.sans],
        mono: ['Fira Code', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
