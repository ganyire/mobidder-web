"use client";

import React from "react";
import { ServerError } from "@/types/global";

interface FormErrorProps {
	errorPayload?: ServerError;
}

const FormError: React.FC<FormErrorProps> = (props) => {
	const { errorPayload } = props;

	const payloadValues = Object.values(errorPayload?.payload || {});

	if (errorPayload?.payload) {
		return (
			<div className="w-[500px]">
				<p>The following errors were encountered.</p>
				<ul className=" list-inside list-disc ">
					{payloadValues?.map((value, index) => (
						<li className=" list-item " key={index}>
							{value}
						</li>
					))}
				</ul>
			</div>
		);
	}

	return <p className="text-lg">{errorPayload?.message}</p>;
};

export default FormError;
