import Link from "next/link";
import React from "react";
import Register from "./Register";

export const metadata = {
	title: "Mobidder - Register",
};

export default function Page() {
	return (
		<div className="flex flex-col justify-center items-center gap-4 ">
			<h1 className="text-3xl text-center font-interBold text-gray-800">
				Start enjoying our platform in less than a minute
			</h1>

			<p className="text-gray-600 text-center">
				Once your account has been created, you can start monitoring your sites and create
				status pages
			</p>

			<div className="mt-9 space-y-2">
				<Register />

				<div className="flex justify-center">
					<Link href="/portal/login" className=" text-blue-600 underline text-center">
						Already have an account?
					</Link>
				</div>
			</div>
		</div>
	);
}
