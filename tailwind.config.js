module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        brown:{
          dark:"#23263a",
          light:"#1f2235",
          lighter:"#2b2e44"
        },
        red:{
          dark:"#ff4a57"
        }
      },
      fontFamily:{
        oswald:['Oswald',"sans-serif"],
        cursive:["Caveat Brush","cursive"]
      }
    },
  },
  plugins: [],
}
