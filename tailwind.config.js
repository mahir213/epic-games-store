/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },
    extend: {},
  },
  plugins: [],
  
    theme: {
      extend: {
        colors: {
          'epic-black': 'rgb(19,18,23)', // Primary black color
          'epic-white': '#FFFFFF',  // Primary white color
          'epic-gray': 'rgb(17,17,20)',   // Optional light gray for accents
        }
      }
    }
  
  
}


