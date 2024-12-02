/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			"main": "#2d2b28",
		},

		backgroundImage: {
			"realmd": "url('/bg-real-md.png')",
		},
	},
	plugins: [],
}
