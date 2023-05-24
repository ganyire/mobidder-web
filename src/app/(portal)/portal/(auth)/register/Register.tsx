"use client";

import React from "react";
import { Formik, Form } from "formik";
import {
	RegisterPayload,
	RegisterPayloadSchema,
} from "@/requests/Auth/Register/schema.register";
import { FormInput, ServerValidationErrors, Submit } from "@/components";
import { HiBuildingOffice, HiEnvelope, HiLockClosed, HiUser } from "react-icons/hi2";
import clsx from "clsx";
import { motion } from "framer-motion";
import NavButton from "./NavButton";
import { useRegister } from "@/requests/Auth/Register/useRegister";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { framerMotionVariants } from "@/utils/helpers";
import useServerErrors from "@/store/useServerErrors";
import { ServerError } from "@/types/global";

type RoleOptionsType = Array<{
	label: string;
	value: RegisterPayload["role"];
	defaultValue?: boolean;
}>;

type FormActionsType = {
	label: string;
	key: "account" | "address";
	onClick: () => void;
};

/**
 * @component Register
 *
 */
const Register = () => {
	const roleOptions: RoleOptionsType = [
		{ label: "Customer", value: "customer", defaultValue: true },
		{ label: "Vendor", value: "vendor-admin" },
	];

	const { showServerErrors } = useServerErrors();

	const [showForm, setShowForm] = React.useState<FormActionsType["key"]>("account");

	const showAccountInfo = () => {
		setShowForm("account");
	};

	const showAddressInfo = () => {
		setShowForm("address");
	};

	const actions: FormActionsType[] = [
		{ label: "Account", key: "account", onClick: showAccountInfo },
		{ label: "Address", key: "address", onClick: showAddressInfo },
	];

	const handleNavigation = (to: FormActionsType["key"], hasError?: boolean) => {
		if (to === "address" && !hasError) {
			showAddressInfo();
		} else if (to === "account") {
			showAccountInfo();
		}
	};

	const initialValues: RegisterPayload = {
		name: "",
		email: "",
		password: "",
		password_confirmation: "",
		phone: "",
		street: "",
		city: "",
		state: "",
		zip_code: "",
		country: "",
		role: "customer",
	};

	const { mutateAsync, isLoading, error: registrationErrors } = useRegister();

	const onSubmit = async (values: RegisterPayload) => {
		const payload = { ...values, password_confirmation: values.password };
		await mutateAsync(payload);
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={toFormikValidationSchema(RegisterPayloadSchema)}
			onSubmit={onSubmit}
		>
			{({ values, errors, touched, handleChange, handleBlur, setFieldValue }) => {
				const handleInput = (name: keyof RegisterPayload) => {
					const inputProps = {
						name: name,
						value: values[name],
						error: touched[name] && errors[name] ? errors[name] : undefined,
					};

					if (name === "phone") {
						return {
							...inputProps,
							onPhoneChange: (value: string) => setFieldValue("phone", value),
						};
					}

					return { ...inputProps, onChange: handleChange, onBlur: handleBlur };
				};

				const hasAccountErrors =
					(errors.name ||
						errors.email ||
						errors.password ||
						errors.role ||
						errors.phone) !== undefined;

				return (
					<Form
						className={clsx([
							"pb-3 px-6",
							"space-y-4 ",
							"border-t-2 border-gray-400",
							"min-h-[400px]",
						])}
					>
						<div
							className={clsx([
								"flex justify-center",
								"items-center gap-4",
								"px-6 -mt-10",
							])}
						>
							{actions.map((action) => (
								<button
									key={action.key}
									type="button"
									className={clsx([
										"rounded-full border-2 border-accent-1",
										"w-[70px] h-[70px] text-center text-sm ",
										"shadow-md",
										showForm === action.key
											? "font-interBold bg-accent-1 text-white"
											: "font-interRegular bg-white text-accent-1",
									])}
								>
									{action.label}
								</button>
							))}
						</div>

						{showServerErrors && (
							<ServerValidationErrors
								message={
									registrationErrors?.response?.data?.message as ServerError["message"]
								}
								payload={
									registrationErrors?.response?.data?.payload as ServerError["payload"]
								}
							/>
						)}

						{showForm === "account" && (
							<motion.div
								variants={framerMotionVariants.showFormVariant}
								initial="initial"
								animate="animate"
								className="space-y-3 account"
								key="account-form"
							>
								<FormInput
									placeholder="Your name"
									helperText="Enter full name"
									{...handleInput("name")}
									icon={HiUser}
									required
								/>

								<FormInput
									placeholder="Email address"
									helperText="Enter email address"
									{...handleInput("email")}
									icon={HiEnvelope}
									required
								/>

								<FormInput
									type="password"
									placeholder="Password"
									helperText="Enter password"
									{...handleInput("password")}
									icon={HiLockClosed}
									required
								/>

								<FormInput
									type="radio"
									placeholder="I am signing up as"
									helperText="Select your role"
									{...handleInput("role")}
									options={roleOptions}
									required
								/>

								<FormInput
									type="mobile"
									placeholder="Mobile number"
									helperText="Enter mobile number"
									{...handleInput("phone")}
									icon={HiEnvelope}
								/>

								<div className="mt-4 flex justify-end px-4">
									<NavButton
										label="Next"
										handleNavigation={() => handleNavigation("address", hasAccountErrors)}
									/>
								</div>
							</motion.div>
						)}

						{showForm === "address" && (
							<motion.div
								variants={framerMotionVariants.showFormVariant}
								initial="initial"
								animate="animate"
								className="mt-8 space-y-3 address"
								key="address-form"
							>
								<FormInput
									placeholder="Street address"
									helperText="Enter street address"
									{...handleInput("street")}
									icon={HiBuildingOffice}
								/>

								<FormInput
									placeholder="City"
									helperText="Enter city"
									{...handleInput("city")}
									icon={HiBuildingOffice}
									required={Boolean(values?.street)}
								/>

								<FormInput
									placeholder="State/Province"
									helperText="Enter state/province"
									{...handleInput("state")}
									icon={HiBuildingOffice}
								/>

								<FormInput
									placeholder="Country"
									helperText="Enter country"
									{...handleInput("country")}
									icon={HiBuildingOffice}
									required={Boolean(values?.street)}
								/>

								<div className="mt-4 flex justify-between items-center px-4">
									<NavButton
										label="Back"
										handleNavigation={() => handleNavigation("account")}
									/>

									<Submit isLoading={isLoading}>Register</Submit>
								</div>
							</motion.div>
						)}
					</Form>
				);
			}}
		</Formik>
	);
};

export default Register;
