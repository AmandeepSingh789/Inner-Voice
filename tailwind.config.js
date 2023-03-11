/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "comforter":['Comforter Brush','cursive'],
        "calli":['Calligraffitti','cursive'],
      },
      colors:{
        "primary":"#ac3b61",
        "secondary":"#123c69",
        "tertiary":"#edc7b7",
        "background":"#eee2dc",
         "accent":"#bab2b5",
        
      },
    },
    
  },
  plugins: [],
}
