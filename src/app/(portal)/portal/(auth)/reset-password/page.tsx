import Link from "next/link";
import React from "react";
import ResetPassword from "./ResetPassword";

export const metadata = {
	title: "Mobidder - Reset password",
};

export default function Page() {
	return (
		<div className="flex flex-col justify-center items-center gap-4 ">
			<h1 className="text-3xl text-center font-interBold text-gray-800">
				Reset password
			</h1>

			<p className="text-gray-600 text-center mb-0">
				To reset your password, enter your email and click &quot;Sent reset code&quot;.
				Check your email for a message a reset code. Return to this page, enter the code
				and your new password. Click &quot;Reset password&quot; to complete.
			</p>

			<p className="text-sm text-center text-gray-950">
				Note: If you don&apos;t receive the password reset email, check your spam/junk
				folder. If you still don&apos;t see it, try requesting a new password reset code.
			</p>

			<div className="mt-9 space-y-2">
				<ResetPassword />

				<div className="flex justify-center items-center gap-2">
					<Link href="/portal/login" className=" text-blue-600 underline text-center">
						Login
					</Link>

					<Link href="/portal/register" className=" text-blue-600 underline text-center">
						Register
					</Link>
				</div>
			</div>
		</div>
	);
}
