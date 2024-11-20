/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme"

export default {
  content: [
	"./index.html",
	"./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
		fontFamily:{
			"doto":[ "Doto", ...defaultTheme.fontFamily.sans],
			"poppins": ["Poppins", ...defaultTheme.fontFamily.sans],
			"exo": ["Exo 2", ...defaultTheme.fontFamily.sans]
		},
		colors: {
			"white": "#F2F2F2",
			"black" : "#00010D",
			"dark-blue": "#010326",
			"blue": "#011126",
			"gray": "#747F8C",
			"primary-text":"#313131",
			"header-text": "#616161",
			"secondary-text": "#919191",
		}
	},
	
  },
  plugins: [],
}

