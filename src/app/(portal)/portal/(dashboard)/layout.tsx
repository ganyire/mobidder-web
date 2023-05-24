import React from "react";
import clsx from "clsx";
import Menu from "./(layout-components)/Menu";

interface DashboardLayoutProps {
	children: React.ReactNode;
}

export const metadata = {
	description: "Dashboard",
};

export default function DashboardLayout(props: DashboardLayoutProps) {
	const { children } = props;

	return (
		<main
			className={clsx([
				"min-h-screen",
				"bg-primary-dense/80",
				"text-secondary-dense text-sm",
			])}
		>
			<div
				className={clsx(["min-h-screen", "flex items-center gap-4", "mx-[150px] py-20"])}
			>
				<Menu />

				<div></div>
			</div>
		</main>
	);
}
