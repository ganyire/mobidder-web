import localFont from "next/font/local";

export const interLight = localFont({
	src: "../../public/fonts/inter/InterTight-Light.ttf",
	display: "swap",
	variable: "--inter-light",
});

export const interLightItalic = localFont({
	src: "./fonts/inter/InterTight-LightItalic.ttf",
	display: "swap",
	variable: "--inter-light-italic",
});

export const interRegular = localFont({
	src: "./fonts/inter/InterTight.ttf",
	display: "swap",
	variable: "--inter-regular",
});

export const interRegularItalic = localFont({
	src: "./fonts/inter/InterTight-Italic.ttf",
	display: "swap",
	variable: "--inter-regular-italic",
});

export const interBold = localFont({
	src: "./fonts/inter/InterTight-Bold.ttf",
	display: "swap",
	variable: "--inter-bold",
});

export const interBoldItalic = localFont({
	src: "./fonts/inter/InterTight-BoldItalic.ttf",
	display: "swap",
	variable: "--inter-bold-italic",
});
