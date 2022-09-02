/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {
      screens: {
        'hero-bp': '1055px',
        
      },
      colors: {
        'lightgrey': '#eeeeee',
        
      },

       backgroundImage: {
        'internallink-image': "url(/src/img/bg-links-3.jpg)",
    },
      
    },
  },
  plugins: [],
}
