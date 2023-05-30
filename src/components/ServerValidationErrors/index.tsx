"use client";

import { ServerError } from "@/types/global";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import clsx from "clsx";
import useServerErrors from "@/store/useServerErrors";

const ServerValidationErrors: React.FC<ServerError> = (props) => {
	const { message, payload } = props;

	const errors = Object.values(payload || {});

	const { showServerErrors, setShowServerErrors } = useServerErrors();

	const variants = {
		initial: { opacity: 0.5, y: -10 },
		animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
		exit: { opacity: 0, y: -10 },
	};

	return (
		<>
			<AnimatePresence mode="wait">
				{showServerErrors && (
					<motion.div
						key="server-validation-errors"
						variants={variants}
						initial="initial"
						animate="animate"
						exit={{ opacity: 0, y: -10 }}
						className={clsx([
							"rounded-lg border border-accent-1/70",
							"bg-yellow-100 text-accent-1 relative",
							"p-4 text-sm",
						])}
					>
						<button
							className={clsx([
								"h-10 w-10 ",
								"flex items-center justify-center ",
								"absolute -top-3 -right-3 rounded-full",
								"bg-secondary-light text-white",
							])}
							type="button"
							onClick={() => setShowServerErrors(false)}
						>
							<FiX size={30} />
						</button>

						{(function () {
							if (errors?.length > 0) {
								return (
									<>
										<p className="text-base font-interBold ">
											The following errors were encountered
										</p>

										<ul className=" list-inside list-disc ">
											{errors?.map((error, index) => (
												<li key={index} className=" list-item ">
													{error}
												</li>
											))}
										</ul>
									</>
								);
							}

							return <p className="text-base">{message}</p>;
						})()}
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default ServerValidationErrors;
