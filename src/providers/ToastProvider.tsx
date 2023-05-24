"use client";

import React from "react";

import { Toaster } from "react-hot-toast";

const ToastProvider = () => {
	return (
		<>
			<Toaster
				position="top-center"
				toastOptions={{
					duration: 5000,
					className: "!bg-gray-900 text-white font-bold",
				}}
				containerClassName="!w-[700px] !bg-red-700"
			/>
		</>
	);
};

export default ToastProvider;
