import useRequest from "@/requests/useRequest";
import React from "react";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { SentPasswordResetCodePayload } from "./schema.resetPassword";
import useServerErrors from "@/store/useServerErrors";
import { ServerError } from "@/types/global";

type SetShowAllFields = React.Dispatch<React.SetStateAction<boolean>>;

const useSentPasswordResetCode = (setShowAllFields: SetShowAllFields) => {
	const request = useRequest();

	const { setShowServerErrors } = useServerErrors();

	const mutate = async (payload: SentPasswordResetCodePayload) => {
		setShowServerErrors(false);

		const response = await request.post("auth/send-password-reset-code", payload);
		return response?.data?.message as string;
	};

	return useMutation({
		mutationFn: mutate,
		onSuccess: (payload) => {
			setShowAllFields(true);
		},
		onError: (error: AxiosError<ServerError>) => setShowServerErrors(true),
	});
};

export default useSentPasswordResetCode;
