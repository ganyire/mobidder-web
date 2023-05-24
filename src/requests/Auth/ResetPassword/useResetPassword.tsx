import useRequest from "@/requests/useRequest";
import React from "react";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ResetPasswordPayload } from "./schema.resetPassword";
import { useRouter } from "next/navigation";
import useServerErrors from "@/store/useServerErrors";
import { ServerError } from "@/types/global";

type SetShowAllFields = React.Dispatch<React.SetStateAction<boolean>>;

const useResetPassword = (setShowAllFields: SetShowAllFields) => {
	const request = useRequest();

	const { setShowServerErrors } = useServerErrors();

	const route = useRouter();

	const mutate = async (payload: ResetPasswordPayload) => {
		setShowServerErrors(false);

		const response = await request.post("auth/reset-password", payload);
		return response?.data?.message as string;
	};

	return useMutation({
		mutationFn: mutate,
		onSuccess: () => {
			setShowAllFields(false);
			route.push("/portal/login");
		},
		onError: (error: AxiosError<ServerError>) => setShowServerErrors(true),
	});
};

export default useResetPassword;
