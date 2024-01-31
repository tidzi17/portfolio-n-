/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        black: '#000000',
        primaryGrey: '#6E6868',
        secondaryGrey: '#353131',
        thirdlyGrey: '#D3D3D3',
        buttonsBg: '#2E2727',
        whitebg: '#DFD4D4',
        whitebgsec: '#f8eeee',
      },
      fontFamily:{
        lekton: ['Lekton'],
      },
    },
  },
  plugins: [],
}

