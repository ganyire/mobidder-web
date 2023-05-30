export const removeFalsyValuesFromObject = (data: any) => {
	Object.keys(data).forEach((key) => {
		if (data[key] === null || data[key] === "") {
			delete data[key];
		}
	});
	return data;
};

export const designSystemColors = {
	primary: {
		dense: "#f8fbff",
		light: "#e5e7eb",
	},
	secondary: {
		dense: "#0f1725",
		light: "#1f2937",
	},
	accent: {
		1: "#ff3900",
		2: "#249df1",
	},
};

export const framerMotionVariants = {
	showFormVariant: {
		initial: { opacity: 0.4, y: 4 },
		animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	},
};

export const META_TITLE = "Mobidder - ";
