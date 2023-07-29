/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Основные цвета для светлой темы
        lightPrimary: 'rgb(149, 0, 254)',
        lightSecondary: 'rgb(255, 255, 255)',
        lightBC: 'rgb(245, 246, 250)',
        lightBorderUnComplete: 'border-l-red-700',
        // lightText: "rgb(0, 0, 0)",
        // Основные цвета для темной темы
        darkPrimary: 'rgb(211, 172, 95)',
        darkSecondary: 'rgb(29, 29, 29)',
        darkBackground: 'rgb(0, 0, 0)',
        // darkText: "rgb(255, 255, 255)",
      },
      border: {
        lightBorderComplete: 'lime-500',
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

