/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}',
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      // https://colors.muz.li/palette/0092d0/007b92/d00085/92005d/d0ad00
      // blue
      primary: {
        light: '#cce9f6',
        DEFAULT: '#0092d0',
      },
      // pink
      secondary: {
        light: '#f8d9ed',
        DEFAULT: '#d00085',
      },
      // green
      success: {
        light: '#aad1dc',
        DEFAULT: '#007b92',
      },
      // yellow
      warning: {
        light: '#f8f3d9',
        DEFAULT: '#d0ad02',
      },
      // purple
      danger: {
        light: '#d6accc',
        DEFAULT: '#92005d',
      },
      // white
      light: {
        DEFAULT: '#fff',
        dark: '#b3c1d0',
      },
      // black
      dark: {
        light: '#b0bac9',
        DEFAULT: '#2e384d',
      },
      ...colors,
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
