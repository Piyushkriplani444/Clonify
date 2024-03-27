/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    darkTheme: "light",
  },
  plugins: [require("daisyui")],
};
