"use client";

import React from "react";
import { IconType } from "react-icons";

interface IconProps {
	icon: IconType;
	size?: number;
	className?: React.HTMLAttributes<SVGSVGElement>["className"];
}

const Icon: React.FC<IconProps> = (props) => {
	const { icon: Icon, className, size = 30 } = props;

	return <Icon size={size} className={className} />;
};

export default Icon;
