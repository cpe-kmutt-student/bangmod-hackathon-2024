/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Kanit', ...defaultTheme.fontFamily.sans],
			latin: ['Outfit'],
			decorate: ['Homemade Apple']
		},
		extend: {
			colors: {
				soapstone: '#fefcfc',
				asphalt: '#0d0d02',
				iron: {
					50: '#f6f6f7',
					100: '#efeff0',
					200: '#e2e1e4',
					300: '#d2d2d7',
					400: '#bab9c0',
					500: '#a7a6ae',
					600: '#93919a',
					700: '#7f7c86',
					800: '#67666d',
					900: '#56555a',
					950: '#333135'
				},
				azul: {
					50: '#eef5ff',
					100: '#d9e8ff',
					200: '#bcd7ff',
					300: '#8dbeff',
					400: '#589aff',
					500: '#3174ff',
					600: '#265bf6',
					700: '#133de2',
					800: '#1633b7',
					900: '#183090',
					950: '#141f57'
				},
				scarlet: {
					50: '#ffeff1',
					100: '#ffdce1',
					200: '#ffbfc9',
					300: '#ff92a2',
					400: '#ff546e',
					500: '#ff1f41',
					600: '#ff0027',
					700: '#db0021',
					800: '#ac001a',
					900: '#94081d',
					950: '#52000c'
				},
				moonstone: {
					50: '#fff1e5',
					100: '#ffd6b3',
					200: '#ffbb80',
					400: '#ffa04d',
					300: '#ff841a',
					500: '#fb7500',
					600: '#e66b00',
					700: '#b35300',
					800: '#803b00',
					900: '#4d2400',
					950: '#1a0c00'
				}
			},
			animation: {
				marquee: 'marquee 25s linear infinite',
				marquee2: 'marquee2 25s linear infinite'
			},
			keyframes: {
				marquee: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-100%)' }
				},
				marquee2: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0%)' }
				}
			}
		}
	},
	plugins: []
};
