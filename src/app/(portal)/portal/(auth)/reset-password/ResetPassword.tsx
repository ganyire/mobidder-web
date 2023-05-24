"use client";

import React from "react";
import { FormInput, ServerValidationErrors, Submit } from "@/components";
import clsx from "clsx";
import { Formik, Form } from "formik";
import {
	ResetPasswordPayloadSchema,
	ResetPasswordPayload,
	SentPasswordResetCodePayloadSchema,
} from "@/requests/Auth/ResetPassword/schema.resetPassword";
import useSentPasswordResetCode from "@/requests/Auth/ResetPassword/useSentPasswordResetCode";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { HiEnvelope, HiLockClosed } from "react-icons/hi2";
import { motion } from "framer-motion";
import { framerMotionVariants } from "@/utils/helpers";
import useResetPassword from "@/requests/Auth/ResetPassword/useResetPassword";
import useServerErrors from "@/store/useServerErrors";
import { MdPassword } from "react-icons/md";

const ResetPassword = () => {
	const [showAllFields, setShowAllFields] = React.useState<boolean>(false);

	const { showServerErrors } = useServerErrors();

	const initialValues: ResetPasswordPayload = {
		email: "",
		password: "",
		password_confirmation: "",
		token: "",
	};

	const {
		mutateAsync: mutateSentCode,
		isLoading: isSendingCode,
		error: resetCodeError,
	} = useSentPasswordResetCode(setShowAllFields);

	const {
		mutateAsync: mutateResetPassword,
		isLoading: isResettingPassword,
		error: passwordResetError,
	} = useResetPassword(setShowAllFields);

	const handleSubmit = async (values: ResetPasswordPayload) => {
		if (!showAllFields) await mutateSentCode({ email: values.email });
		else await mutateResetPassword({ ...values, password_confirmation: values.password });
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
					<Form className={clsx(["pb-3 px-6", "space-y-4", "min-h-[300px]"])}>
						<motion.div
							variants={framerMotionVariants.showFormVariant}
							initial="initial"
							animate="animate"
							className="space-y-3"
						>
							{showServerErrors && (
								<ServerValidationErrors
									message={
										(resetCodeError ?? passwordResetError)?.response?.data?.message
									}
									payload={
										(resetCodeError ?? passwordResetError)?.response?.data?.payload
									}
								/>
							)}

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
										icon={MdPassword}
										required
									/>

									<FormInput
										type="password"
										placeholder="New password"
										helperText="Enter new password"
										{...handleInput("password")}
										icon={HiLockClosed}
										required
									/>

									<Submit fullWidth isLoading={isResettingPassword}>
										Reset Password
									</Submit>
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
