import * as colors from 'tailwindcss/colors';
import * as plugin from 'tailwindcss/plugin';

const primary = '#FE5F00'

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './app/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary,
      black: colors.black,
      white: colors.white,
      transparent: colors.transparent,
      gray: {
        900: '#505050',
        800: '#7C7C7C',
        700: '#898989',
        600: '#B1B1B1',
        500: '#C6C6C6',
        400: '#CECECE',
        300: '#E8E8E8',
        250: '#EFEFEF',
        200: '#F4F1EE',
        100: '#F9FAFB',
      },
      lightOrange: '#FFF7EE',
    },
    extend: {},
  },
  plugins: [],
}