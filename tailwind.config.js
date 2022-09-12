/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['index.html'],
	theme: {
		fontFamily: {
			poppins: '"Poppins", sans-serif',
			inter: '"Inter", sans-serif',
		},
		extend: {
			colors: {
				body: '#FBEBEC',
				btnColor: '#050914',
			},
			width: {
				85: '350px',
			},
			scale: {
				102: '1.02',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
