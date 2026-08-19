/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Esto nos permitirá cambiar entre claro y oscuro fácilmente
  theme: {
    extend: {
      colors: {
        'vp-amethyst': '#0D0630',
        'vp-lime': '#E6F9AF',
        'vp-gold': '#CAAC4B',
        'vp-teal': '#8BBEB2',
        'vp-blue': '#18314F',
        
      },
      fontFamily: {
        'bebas': ['"Bebas Neue"', 'sans-serif'],
        'lora': ['"Lora"', 'serif'],
        'poppins': ['"Poppins"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}