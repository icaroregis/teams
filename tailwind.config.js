import { colors } from './src/styles/colors'
import { fontSize } from './src/styles/fontSize'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors,
      fontSize,
      fontFamily: {
        roboto: ['Roboto_400Regular'],
        robotoBold: ['Roboto_700Bold'],
      },
    },
  },
  plugins: [],
}
