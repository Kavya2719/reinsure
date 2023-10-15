/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      "scandia": ['Scandia-Medium'],
      "scandia-regular": ['Scandia-Regular'],
      "unbounded": ["Unbounded"]
    },
    extend: {
      colors: {
        'blue': '#0A3CF5',
        'dark-blue': '#003049',
        "gray": "#2F2F2F",
        "light-gray": "#565656",
        "light-white": "#F5F5FF",
        "light-purple": "rgba(10, 60, 245, 0.10)",
        "light-white-2": "rgba(255, 255, 255, 0.50)"
      },
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
}