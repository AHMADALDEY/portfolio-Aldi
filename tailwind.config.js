/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#1d4ed8',
        
        secondary: '#64748b',

        dark: '#020617f8',
      },
      screen: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}