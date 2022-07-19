/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 0 7px 0px rgba(0, 0, 0, 0.3)",
        "mx-auto": "0px auto",
      },
      backgroundColor: {
        mid: "red",
        search: "blue",
      },
    },
    color: {},
  },
  plugins: [],
};
