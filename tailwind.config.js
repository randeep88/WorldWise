/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".custom-scrollbar": {
          "scrollbar-width": "thin", /* For Firefox */
          "scrollbar-color": "#333333 #1a1a1a", /* Thumb and track colors */

          "&::-webkit-scrollbar": {
            width: "4px", /* Minimal width */
          },
          "&::-webkit-scrollbar-track": {
            background: "#1a1a1a", /* Dark track */
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#555", /* Dark thumb */
            "border-radius": "10px", /* Rounded corners */
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#888", /* Slightly lighter thumb on hover */
          },
        },
      });
    }),
  ],
}

