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
        "custom-gray": "#6C757D",
        "custom-blue": "#0D6EFD",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        "helvetica-neue-lt-geo": ["Helvetica Neue LT GEO", "sans-serif"],
        "helvetica-neue-lt-geo-caps": [
          "Helvetica Neue LT GEO Caps",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "custom-dark-gradient":
          "linear-gradient(187.16deg, #181623 0.07%, #191725 51.65%, #0D0B14 98.75%);",
      },
    },
  },
  plugins: [],
};
