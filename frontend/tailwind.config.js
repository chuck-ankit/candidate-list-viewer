/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'woodsmoke': {
          50: '#f5f5f6',
          100: '#e6e6e7',
          200: '#cfcfd2',
          300: '#aeaeb2',
          400: '#85868b',
          500: '#6a6b70',
          600: '#5b5b5f',
          700: '#4d4d51',
          800: '#444546',
          900: '#3c3c3d',
          950: '#19191a'
        },
        'diesel': {
          '50': '#fff4ec',
          '100': '#ffe6d3',
          '200': '#ffc8a5',
          '300': '#ffa26c',
          '400': '#ff7031',
          '500': '#ff4a0a',
          '600': '#f62c00',
          '700': '#cc1c02',
          '800': '#a1180b',
          '900': '#82170c',
          '950': '#130201',
        },
      }
    }
  },
  plugins: []
};










