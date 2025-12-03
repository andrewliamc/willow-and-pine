/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#173F2A",
        "soft-sage": "#A7C4A0",
        cream: "#F5F1EB",
        clay: "#C8A68C",
      },
      fontFamily: {
        heading: ["Cormorant Garamond", "serif"],
        subheading: ["Inter", "system-ui", "sans-serif"],
        body: ["DM Sans", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
