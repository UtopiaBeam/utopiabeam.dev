const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{html,tsx,ts,jsx,js}',
    './components/**/*.{html,tsx,ts,jsx,js}',
  ],
  theme: {
    extend: {
      colors: {
        darkgray: '#191919',
        orange: '#ffa500',
        terminal: '#00ff66',
      },
      fontFamily: {
        sans: ['Sarabun', ...defaultTheme.fontFamily.sans],
        header: ['Kanit', ...defaultTheme.fontFamily.sans],
        mono: ['"Fira Code"', ...defaultTheme.fontFamily.mono],
        logo: ['"Space Mono"', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
