/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			background: "#FEFCFC",
			content: "#0D0D02",
			second: "#D2D2D7",
			"extra-blue": "#265BF6",
			"extra-red": "#AC001A",
			"extra-orange": "#FB7500",
			"extra-brown": "#3A230C",
			"extra-yellow": "#FEBB28",
			"extra-gold": "#C89601",
			"extra-ivory": "#F9F6E8",
		},
		fontFamily: {
      "sans": ['Kanit', ...defaultTheme.fontFamily.sans],
			"thai": ["Kanit", "sans-serif"],
			"english": ["Outfit", "sans-serif"],
			"decor-1": ["Homemade Apple", "cursive"],
			"decor-2": ["Old Standard TT", "serif"],
		},
		extend: {}
	},
	plugins: []
};
