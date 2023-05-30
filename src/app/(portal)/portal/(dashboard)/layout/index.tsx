import React from "react";
import clsx from "clsx";
import Menu from "./Menu";
import Header from "./Header";

interface DashboardLayoutProps {
	children: React.ReactNode;
}

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
			<div className={clsx(["min-h-screen", "flex gap-6", "mx-[150px] py-20"])}>
				<Menu />

				<div className="flex-1">
					<Header />
				</div>
			</div>
		</main>
	);
}
