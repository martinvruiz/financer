/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{ 
        inter : ["Inter" , "sans-serif"],
      },
      backgroundImage:{
        'fondo' : 'url(/src/images/fondo2.jpg)'
      }
    },
  },
  plugins: [],
}

