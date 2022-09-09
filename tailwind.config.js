/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['index.html'],
	theme: {
		fontFamily: {
			poppins: '"Poppins", sans-serif',
		},
		extend: {
			colors: {
				body: '#FBEBEC',
				btnColor: '#050914',
			},
			width: {
				85: '350px',
			},
		},
	},
	plugins: [],
};
