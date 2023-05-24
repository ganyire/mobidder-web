import Link from "next/link";
import React from "react";
import Login from "./Login";

export const metadata = {
	title: "Mobidder - Login",
};

export default function Page() {
	return (
		<div className="flex flex-col justify-center items-center gap-4 ">
			<h1 className="text-3xl text-center font-interBold text-gray-800">
				Sign in to Mobidder
			</h1>

			<p className="text-gray-600 text-center">
				Trade and profit with ease on Mobidder. Sign in now to get started!
			</p>

			<div className="mt-9 space-y-2">
				<Login />

				<div className="flex flex-col justify-center items-center gap-1">
					<Link href="/portal/register" className=" text-blue-600 underline text-center">
						Don&apos;t have an account?
					</Link>

					<Link
						href="/portal/reset-password"
						className=" text-blue-600 underline text-center"
					>
						Forgot password?
					</Link>
				</div>
			</div>
		</div>
	);
}
