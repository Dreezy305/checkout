/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      AmazonEmberMedium: "Amazon-Ember-medium",
      AmazonEmberRegular: "Amazon-Ember-regular",
      AmazonEmberThin: "Amazon-Ember-thin",
    },
    fontSize: {
      font12: "12px",
      font14: "14px",
      font18: "18px",
    },
    extend: {
      colors: {
        link: "#007185",
        title: "#0F1111",
        grey: "#565959",
      },
      keyframes: {},
    },
  },
  plugins: [],
};
