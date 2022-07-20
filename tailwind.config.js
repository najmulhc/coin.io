/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode:"media", 
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#5367FF",
        
"secondary": "#0070E4",
        
"accent": "#1FB2A6",
        
"neutral": "#121318",
        
"base-100": "#080808",
        
"info": "#3ABFF8",
        
"success": "#059B66",
        
"warning": "#FBBD23",
        
"error": "#DC2625",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
