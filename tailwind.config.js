/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			mont: ['Montserrat'],
		},
		extend: {
			colors: {
				'light-purple': '#A2A7F0',
				'light-gray': '#F7F7FE',
				'dark-gray': '#6E728E',
				'verydark-gray': '#4A4D60',
			},
		},
	},
	plugins: [],
}
