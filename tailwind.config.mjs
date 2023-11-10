/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		// colors: {
		//   transparent: "transparent",
		//   blue: "#2A4DD0",
		//   green: "#4CA154",
		//   dark1: "#111729",
		//   dark2: "#223344",
		//   dark3: "#909193",
		//   light1: "#F2F9FE",
		//   light2: "#FFFFFF",
		// },
		extend: {
			colors: {
				transparent: "transparent",
				blue: "#2A4DD0",
				green: "#4CA154",
				dark1: "#111729",
				dark2: "#223344",
				dark3: "#909193",
				light1: "#F2F9FE",
				light2: "#FFFFFF",
			},
			flex: {
				2: "0 0 100%",
			},
		},
	},
	//darkMode: "class",
	plugins: [],
}
