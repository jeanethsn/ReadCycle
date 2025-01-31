/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open sans", "serif"],
        serif: ["Open sans", "serif"],
      },
      colors: {
        primary: "#14183E",
        secondary: "#165058",
        action: {
          default: "#165058",
          hover: "#165058",
          active: "#165058",
        },
        background: {
          light: "#E3F6F8",
        },
        text: {
          primary: "#14183E",
          secondary: "#1B626D",
          muted: "#718096",
        },
        additional: {
          red: "#CD240D",
          yellow: "#EDC22E",
          purple: "#9E2DD3",
        },
      },
      colors:{
        primary: "#14183E",
        secondary: '165058',
      },
      action: {
        default: '#165058', 
        hover: '#165058',   
        active: '#165058',  
      },
      background: {
        light: '#E3F6F8', 
      },
      text: {
        primary: '#14183E', 
        secondary: '#1B626D', 
        muted: '#718096', 
      },
      
    },
  },
  plugins: [require('tailwind-hamburgers')],
};
