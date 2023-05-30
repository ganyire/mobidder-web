"use client";

import clsx from "clsx";
import React from "react";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";

interface LogoProps {
	squareSize?: number;
	bg?: string;
}

const Logo: React.FC<LogoProps> = (props) => {
	const { squareSize = 100, bg } = props;

	const iconSize = squareSize * 0.9;

	return (
		<div
			className={clsx([
				"rounded-full",
				`h-[${squareSize}px] w-[${squareSize}px]`,
				"border-8 border-accent-1",
				"flex justify-center items-center",
				"p-3",
				bg,
			])}
		>
			<HiOutlineDevicePhoneMobile size={iconSize} className="text-primary-dense" />
		</div>
	);
};

export default Logo;
