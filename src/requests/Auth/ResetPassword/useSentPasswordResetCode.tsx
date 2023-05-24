import useRequest from "@/requests/useRequest";
import React from "react";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { SentPasswordResetCodePayload } from "./schema.resetPassword";

const useSentPasswordResetCode = (
	setShowAllFields: React.Dispatch<React.SetStateAction<boolean>>
) => {
	const request = useRequest();

	const mutate = async (payload: SentPasswordResetCodePayload) => {
		const response = await request.post("auth/send-password-reset-code", payload);
		return response?.data?.message as string;
	};

	return useMutation({
		mutationFn: mutate,
		onSuccess: (payload) => {
			setShowAllFields(true);
		},
		onError: (error: AxiosError) => {
			console.log(error);
		},
	});
};

export default useSentPasswordResetCode;
