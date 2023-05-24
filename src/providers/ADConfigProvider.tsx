"use client";

import React from "react";
import { ConfigProvider } from "antd";
import { designSystemColors } from "@/utils/helpers";

type theme = {
	[key: string]: string;
};

const defaultThemeData: theme = {
	colorPrimary: designSystemColors.accent[2],
};

interface ADConfigProviderProps {
	children: React.ReactNode;
}

const ADConfigProvider: React.FC<ADConfigProviderProps> = (props) => {
	const { children } = props;

	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: defaultThemeData.colorPrimary,
				},
			}}
		>
			{children}
		</ConfigProvider>
	);
};

export default ADConfigProvider;
