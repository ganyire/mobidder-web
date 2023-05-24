"use client";

import Next13NProgress from "next13-nprogress";
import { designSystemColors } from "@/utils/helpers";

const ProgressProvider = () => (
	<Next13NProgress
		color={designSystemColors.accent[1]}
		height={4}
		options={{
			showSpinner: false,
		}}
	/>
);

export default ProgressProvider;
