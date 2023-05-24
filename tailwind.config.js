import { designSystemColors } from "./src/utils/helpers";

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},

			fontFamily: {
				interRegular: ["var(--inter-regular)"],
				interRegularItalic: ["var(--inter-regular-italic)"],
				interBold: ["var(--inter-bold)"],
				interBoldItalic: ["var(--inter-bold-italic)"],
				interLight: ["var(--inter-light)"],
				interLightItalic: ["var(--inter-light-italic)"],
			},

			colors: {
				primary: {
					dense: designSystemColors.primary.dense,
					light: designSystemColors.primary.light,
				},
				secondary: {
					dense: designSystemColors.secondary.dense,
					light: designSystemColors.secondary.light,
				},
				accent: {
					1: designSystemColors.accent[1],
					2: designSystemColors.accent[2],
				},
			},
		},
	},
	plugins: [],
};
