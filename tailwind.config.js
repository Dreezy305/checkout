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
      AmazonEmberHeavy: "Amazon-Ember-heavy",
      AmazonEmberLight: "Amazon-Ember-light",
      AmazonEmberBold: "Amazon-Ember-bold",
    },
    fontSize: {
      font11: "11px",
      font12: "12px",
      font13: "13px",
      font14: "14px",
      font18: "18px",
    },
    extend: {
      colors: {
        link: "#007185",
        title: "#0F1111",
        grey: "#565959",
        success: "#007600",
        yellowBg: "#FFD814",
        yellowBorder: "#FCD200",
        lightGrey: "#555",
        brown: "#B12704",
      },
      keyframes: {},
    },
  },
  plugins: [],
};
