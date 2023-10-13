/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Kanit', ...defaultTheme.fontFamily.sans]
		},
		extend: {}
	},
	plugins: []
};
