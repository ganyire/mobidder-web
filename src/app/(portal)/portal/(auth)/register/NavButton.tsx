import clsx from "clsx";
import React from "react";

interface NavButtonProps {
	handleNavigation: React.MouseEventHandler<HTMLButtonElement>;
	label: string;
}

const NavButton: React.FC<NavButtonProps> = (props) => {
	const { handleNavigation, label } = props;
	return (
		<button
			className={clsx([
				"p-2 rounded-full text-white bg-secondary-light",
				"hover:bg-secondary-dense ",
				"w-[55px] h-[55px] flex items-center justify-center gap-2",
			])}
			type="submit"
			onClick={handleNavigation}
		>
			{label}
		</button>
	);
};

export default NavButton;
