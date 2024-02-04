/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserratBold: ["Montserrat-Bold", "sans-serif"],
        montserratRegular: ["Montserrat-Regular", "sans-serif"],
        montserratMedium: ["Montserrat-Medium", "sans-serif"],
        montserratLight: ["Montserrat-Light", "sans-serif"],
        montserratItalic: ["Montserrat-Italic", "sans-serif"],
        ralewayBold: ["Raleway-Bold", "sans-serif"],
        ralewayRegular: ["Raleway-Regular", "sans-serif"],
        ralewayMedium: ["Raleway-Medium", "sans-serif"],
        ralewayLight: ["Raleway-Light", "sans-serif"],
        ralewayItalic: ["Raleway-Italic", "sans-serif"],
      }
    },
  },
  plugins: [],
}

