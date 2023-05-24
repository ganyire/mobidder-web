"use client";

import clsx from "clsx";
import React from "react";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";

const Logo = () => {
	return (
		<div
			// className="rounded-full"
			className={clsx([
				"rounded-full",
				"h-[100px] w-[100px]",
				"border-8 border-accent-1",
				"flex justify-center items-center",
			])}
		>
			<HiOutlineDevicePhoneMobile className="text-6xl text-primary-dense" />
		</div>
	);
};

export default Logo;
