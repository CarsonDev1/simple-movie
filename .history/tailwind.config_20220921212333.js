/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				body: ["DM Sans", "sans-serif"],
			},
			colors: {
				primary: "#F62682",
				secondary: "#F13251",
			},
		},
	},
	plugins: [],
};