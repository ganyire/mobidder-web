"use client";

import React from "react";
import { FormInput, Submit } from "@/components";
import clsx from "clsx";
import { Formik, Form } from "formik";
import {
	ResetPasswordPayloadSchema,
	ResetPasswordPayload,
	SentPasswordResetCodePayload,
	SentPasswordResetCodePayloadSchema,
} from "@/requests/Auth/ResetPassword/schema.resetPassword";
import useSentPasswordResetCode from "@/requests/Auth/ResetPassword/useSentPasswordResetCode";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { HiEnvelope } from "react-icons/hi2";
import { motion } from "framer-motion";
import { framerMotionVariants } from "@/utils/helpers";
import { data } from "autoprefixer";

// type ValidationType<T= ResetPasswordPayload | SentPasswordResetCodePayload> = T

const ResetPassword = () => {
	const [showAllFields, setShowAllFields] = React.useState<boolean>(false);

	const initialValues: ResetPasswordPayload = {
		email: "",
		password: "",
		password_confirmation: "",
		token: "",
	};

	const { mutateAsync, isLoading: isSendingCode } =
		useSentPasswordResetCode(setShowAllFields);

	const handleSubmit = async (values: ResetPasswordPayload) => {
		if (!showAllFields) await mutateAsync({ email: values.email });
		else console.log("ok");
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={toFormikValidationSchema(
				showAllFields ? ResetPasswordPayloadSchema : SentPasswordResetCodePayloadSchema
			)}
			onSubmit={(data) => handleSubmit(data)}
		>
			{({ values, errors, touched, handleChange, handleBlur }) => {
				const handleInput = (name: keyof ResetPasswordPayload) => ({
					name: name,
					value: values[name],
					onChange: handleChange,
					onBlur: handleBlur,
					error: touched[name] && errors[name] ? errors[name] : undefined,
				});

				return (
					<Form className={clsx(["pb-3 px-6 pt-2", "space-y-3", "min-h-[300px]"])}>
						<motion.div
							variants={framerMotionVariants.showFormVariant}
							initial="initial"
							animate="animate"
							className="space-y-3"
						>
							<FormInput
								placeholder="Email address"
								helperText="Enter email address"
								{...handleInput("email")}
								icon={HiEnvelope}
								required
							/>

							{!showAllFields && (
								<Submit fullWidth isLoading={isSendingCode}>
									Sent password reset code
								</Submit>
							)}

							{showAllFields && (
								<motion.div
									variants={framerMotionVariants.showFormVariant}
									initial="initial"
									animate="animate"
									className="space-y-3"
								>
									<FormInput
										placeholder="Password reset code"
										helperText="Enter password reset code"
										{...handleInput("token")}
										icon={HiEnvelope}
										required
									/>

									<FormInput
										placeholder="New password"
										helperText="Enter new password"
										{...handleInput("password")}
										icon={HiEnvelope}
										required
									/>
								</motion.div>
							)}
						</motion.div>
					</Form>
				);
			}}
		</Formik>
	);
};

export default ResetPassword;
