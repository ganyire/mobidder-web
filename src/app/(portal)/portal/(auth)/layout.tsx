import { ReactNode } from "react";
import clsx from "clsx";
import { Logo } from "@/components";
import Link from "next/link";

interface AuthLayoutProps {
	children: ReactNode;
}

export const metadata = {
	description: "Authentication processes for Mobidder",
};

export default function AuthLayout(props: AuthLayoutProps) {
	const { children } = props;

	return (
		<main className={clsx(["min-h-screen", "grid grid-cols-12"])}>
			<div
				className={clsx([
					"col-span-7",
					"bg-primary-dense/80",
					"flex flex-col items-center justify-center",
				])}
			>
				<div className="w-[400px] flex flex-col justify-center gap-6 items-center">
					<Link
						href="/"
						className={clsx([
							"rounded-full",
							"px-4 py-3",
							"border border-accent-2 shadow-lg",
							"text-accent-2",
						])}
					>
						Back to site
					</Link>

					{children}

					<p className="text-gray-500 text-sm">&copy; 2023 Mobidder</p>
				</div>
			</div>

			<div
				className={clsx([
					"col-span-5",
					"flex flex-col items-center justify-center gap-4",
					"bg-secondary-dense/80",
					"text-gray-200",
					"px-12 py-12",
				])}
			>
				<Logo />

				<div className="w-[500px] mx-auto space-y-4">
					<p className=" font-interBold text-5xl text-center">
						Get the best deals without the hassle - let the suppliers come to you!
					</p>

					<p className="text-center text-lg">
						Unlock unbeatable prices with the power of competition - welcome to our
						bidding war!
					</p>
				</div>
			</div>
		</main>
	);
}
