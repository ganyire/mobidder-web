"use client";

import { designSystemColors } from "@/utils/helpers";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

interface SubmitProps {
	children: React.ReactNode;
	isLoading?: boolean;
	fullWidth?: boolean;
	type?: "submit" | "button";
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Submit: React.FC<SubmitProps> = (props) => {
	const { children, isLoading, fullWidth, type } = props;

	return (
		<button
			type={type || "submit"}
			className={clsx([
				"font-interBold text-lg relative",
				"rounded-full",
				fullWidth && "w-full",
				"hover:bg-secondary-light/80",
				"min-w-[144px] h-[55px] flex items-center justify-center gap-2",
				" border-accent-1",
				"px-8",
				"border-accent-1 bg-secondary-light/90 text-white border-b-4",
				"flex flex-col gap-1 items-center justify-center",
			])}
		>
			{isLoading ? (
				<Image
					src="/images/bars-scale.svg"
					color={designSystemColors.accent[2]}
					alt=""
					width={30}
					height={10}
				/>
			) : (
				children
			)}
		</button>
	);
};

export default Submit;
