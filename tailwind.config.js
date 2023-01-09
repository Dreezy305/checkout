/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {},
    fontSize: {
      font12: "12px",
      font14: "14px",
    },
    extend: {
      colors: {
        link: "#007185",
        title: "#0F1111",
      },
      keyframes: {},
    },
  },
  plugins: [],
};
