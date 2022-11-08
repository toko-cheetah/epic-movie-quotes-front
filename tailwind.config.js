/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        beige: "#DDCCAA",
        "dark-blue": "#11101A",
        "dark-cyan-blue": "#212529",
        "custom-red": "#E31221",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        "helvetica-neue-lt-geo": ["Helvetica Neue LT GEO", "sans-serif"],
        "helvetica-neue-lt-geo-caps": [
          "Helvetica Neue LT GEO Caps",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
