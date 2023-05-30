"use client";

import React from "react";
import { Input, Tooltip, Radio, RadioChangeEvent } from "antd";
import { IconType } from "react-icons";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { BsDashSquare } from "react-icons/bs";

interface FormInputProps {
	error?: string;
	icon?: IconType;
	width?: number;
	name: string;
	value?: string;
	onChange?: <T = React.ChangeEvent<HTMLInputElement> | RadioChangeEvent>(e: T) => void;
	onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
	onPhoneChange?: (value: string) => void;
	type?: "text" | "password" | "radio" | "select" | "mobile";
	placeholder?: string;
	helperText?: React.ReactNode;
	maxLength?: number;
	options?: Array<{
		label: string;
		value: string;
		defaultValue?: boolean;
	}>;
	required?: boolean;
}

/**
 * @component FormInput
 */
const FormInput: React.FC<FormInputProps> = (props) => {
	const {
		icon: Icon,
		helperText,
		type,
		maxLength,
		error,
		onChange,
		onBlur,
		options,
		placeholder,
		value,
		required,
		onPhoneChange,
		name,
		width = 400,
	} = props;

	const placeholderText = placeholder + `${required ? " *" : ""}`;

	const radioDefaultValue = options?.find((option) => option.defaultValue)?.value || "";

	const fieldWidth = `w-[${width}px]`;

	const className = clsx([
		fieldWidth,
		"rounded-none",
		"h-[55px]",
		"focus:!ring-gray-200",
		"border-0 border-b-2 !border-gray-400 hover:!border-gray-400",
		"focus:!border-gray-400",
	]);

	const rootClassName = "flex justify-between gap-2";

	const errorVariant = {
		initial: { opacity: 0, y: -10, x: -5 },
		animate: {
			opacity: 1,
			y: 0,
			x: 0,
			transition: {
				duration: 0.3,
			},
		},
	};

	return (
		<div>
			<Tooltip
				trigger={["focus"]}
				placement="left"
				title={helperText + `${required ? " *" : ""}`}
				color="#249df1"
			>
				{(function () {
					if (type === "password") {
						return (
							<Input.Password
								prefix={
									Icon ? (
										<Icon className="text-accent-1/30" size={25} />
									) : (
										<BsDashSquare size={25} className="text-accent-1/30" />
									)
								}
								value={value}
								rootClassName={rootClassName}
								className={className}
								onChange={onChange}
								onBlur={onBlur}
								placeholder={placeholderText}
								name={name}
							/>
						);
					}

					if (type === "mobile") {
						return (
							<PhoneInput
								defaultCountry="ZW"
								focusInputOnCountrySelection
								value={value}
								onChange={onPhoneChange ?? (() => {})}
								placeholder={placeholderText}
								international
								smartCaret
								className={className + " bg-white px-2 "}
							/>
						);
					}

					if (type === "radio") {
						return (
							<div
								className={clsx([fieldWidth, "flex items-center justify-between gap-2"])}
							>
								<p className="flex flex-col justify-center text-sm">
									{placeholder}
									<span>
										({options?.find((option) => option.value === value)?.label})
									</span>
								</p>

								<Radio.Group
									defaultValue={radioDefaultValue}
									onChange={onChange}
									options={options}
									optionType="button"
									buttonStyle="solid"
									size="large"
									className="flex"
									name={name}
								/>
							</div>
						);
					}
					return (
						<Input
							type={type || "text"}
							value={value}
							showCount
							maxLength={maxLength || 80}
							prefix={
								Icon ? (
									<Icon className="text-accent-1/30" size={25} />
								) : (
									<BsDashSquare size={25} className="text-accent-1/30" />
								)
							}
							rootClassName={rootClassName}
							className={className}
							onChange={onChange}
							onBlur={onBlur}
							placeholder={placeholderText}
							name={name}
						/>
					);
				})()}
			</Tooltip>

			{error && (
				<AnimatePresence>
					<motion.p
						key={name}
						variants={errorVariant}
						initial="initial"
						animate="animate"
						exit="initial"
						className="text-accent-1 ml-2 text-sm"
					>
						{error}
					</motion.p>
				</AnimatePresence>
			)}
		</div>
	);
};

export default FormInput;
