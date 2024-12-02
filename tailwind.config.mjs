/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			
		},

		backgroundImage: {
			"realmd": "url('/bg-real-md.png')",
			"linear-pink" : "linear-gradient(180deg, rgba(84,3,18,1) 0%, rgba(45,43,40,1) 50%);",
		},

	
	},
	plugins: [],
}
