/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0E1B2A",
        secondary: "#1F42FF",
        ternary: "#10C200",
        text: "#5E6670",
        grey: "#C4C4C4",
        darkGrey: "#A4AEBA",
        Agreen: "#10C200",
        Accentred: "#FF431A",
        lavender: "#BBC7FE",
      },
      fontFamily: {
        TLogo: ["Inter", "sans-serif"],
        Theading: ["Roboto", "sans-serif"],
        Tparagraph: ["DM Sans", "sans-serif"],
        Tbutton: ["Montserrat", "sans-serif"],
      },

      screens: {
        verySmall: "340px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
