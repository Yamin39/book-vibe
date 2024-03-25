/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#131313",
        "primary-green": "#23BE0A",
        "dark-80": "#131313CC",
        "dark-15": "#13131326",
        "dark-5": "#1313130D",
      },
    },
  },
  plugins: [require("daisyui")],
};
