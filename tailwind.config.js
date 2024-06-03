/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        btnPrimaryColor : "#69CDCB"
      },
      keyframes : {
        moveRight : {
          "0%" : {transform : "translateX(0)"},
          "50%" : {transform : "translateX(10px)"},
          "100%" : {transform : "translateX(0px)"}
        }
      },
      animations : {
        moveRight : "moveRight 1s ease-in-out infinite"
      },
      screens : {
        xs : '260px',
        sm : '576px',
        md : '768px', 
        lg : '992px',
        xl : '1200px',
        "2xl" : '1400px'
      }
    },
  },
  plugins: [],
}