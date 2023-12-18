/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'sm': '576px',
      'md': '960px',
      'lg': '1440px',
    },
    colors: {
      'black': {
        'light': '#0E1C26',
        'dark': '#000000',
      },
      'gray': {
        'light': '#999999',
        'charcoal': '#374151',
        'dark': '#262A2F',
      },
      'silver': '#557C93',
      'purple': '#645BF0',
      'orange': '#E3792D',
      'blue': '#4A92FE',
      'red': '#CE3124',
      'turquoise': '#6EE2F5',
    },
    fontFamily: {
      'archivo-black': ['Archivo Black', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif'],
      'monoton': ['Monoton', 'sans-serif'],
    },
    extend: {

    },
  },
  plugins: [],
}