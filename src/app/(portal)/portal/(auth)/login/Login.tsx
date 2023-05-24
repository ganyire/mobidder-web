"use client";

import React from "react";
import { FormInput, ServerValidationErrors, Submit } from "@/components";
import clsx from "clsx";
import { LoginPayload, LoginPayloadSchema } from "@/requests/Auth/Login/schema.login";
import { Formik, Form } from "formik";
import { HiEnvelope, HiLockOpen } from "react-icons/hi2";
import useLogin from "@/requests/Auth/Login/useLogin";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { framerMotionVariants } from "@/utils/helpers";
import { motion } from "framer-motion";
import useServerErrors from "@/store/useServerErrors";
import { ServerError } from "@/types/global";

const Login = () => {
	const { showServerErrors } = useServerErrors();

	const initialValues: LoginPayload = {
		email: "",
		password: "",
	};

	const { mutateAsync, isLoading, error: loginErrors } = useLogin();

	const onSubmit = async (values: LoginPayload) => {
		await mutateAsync(values);
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={toFormikValidationSchema(LoginPayloadSchema)}
			onSubmit={onSubmit}
		>
			{({ values, errors, touched, handleChange, handleBlur }) => {
				const handleInput = (name: keyof LoginPayload) => ({
					name: name,
					value: values[name],
					onChange: handleChange,
					onBlur: handleBlur,
					error: touched[name] && errors[name] ? errors[name] : undefined,
				});

				return (
					<Form
						className={clsx([
							"pb-3 px-6 pt-10",
							"border-t-2 border-gray-400",
							"min-h-[200px]",
						])}
					>
						<motion.div
							variants={framerMotionVariants.showFormVariant}
							initial="initial"
							animate="animate"
							className="space-y-3"
						>
							{showServerErrors && (
								<ServerValidationErrors
									message={loginErrors?.response?.data?.message as ServerError["message"]}
									payload={loginErrors?.response?.data?.payload as ServerError["payload"]}
								/>
							)}
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
								icon={HiLockOpen}
								required
							/>

							<div className="mt-4 flex justify-center items-center ">
								<Submit isLoading={isLoading} fullWidth>
									Log in
								</Submit>
							</div>
						</motion.div>
					</Form>
				);
			}}
		</Formik>
	);
};

export default Login;
