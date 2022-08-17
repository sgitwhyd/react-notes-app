/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "border-color": "#3E065F",
        "button-border-color": "#700B97",
        primary: "#8E05C2",
      },
      gridTemplateColumns: {
        4: "repeat(4, 1fr)",
      },
    },
  },
  plugins: [],
};
