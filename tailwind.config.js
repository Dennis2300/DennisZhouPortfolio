/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        navfont: ["Raleway", "sans-serif"],
        heading: ["Baskervile", "serif"],
        content: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [daisyui],
};
