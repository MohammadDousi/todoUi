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


        animMenuOpen: {
          "100%": { left: 0 },
        },
        animMenuClose: {
          "0%": { left: 0 },
        },
        

      },

      animation: {
        newBtnAnim: "animNewBtn 3s infinite forwards",
        "anim-menuHOpen": "animMenuOpen .5s 1 forwards",
        "anim-menuHClose": "animMenuClose .5s 1 forwards",
      },

    },
  },
  plugins: [],
};
