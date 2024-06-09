/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#0379B8',
        secondary:'#06BDAE'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}