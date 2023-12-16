/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        borderColor: "#EDEFF2",
        textColor: "#7D8FB3",
      },

      keyframes: {
        animNewBtn: {
          "0% ,100%": { color: "#0ea5e9" },
          "50%": { color: "#3b82f6" },
        },
      },

      animation: {
        newBtnAnim: "animNewBtn 3s infinite forwards",
      },
    },
  },
  plugins: [],
};
