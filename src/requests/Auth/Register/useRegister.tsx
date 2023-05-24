import useRequest from "@/requests/useRequest";
import useAuthStore from "@/store/useAuthStore";
import { User } from "@/types/resources/user.d";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { RegisterPayload } from "./schema.register";
import useServerErrors from "@/store/useServerErrors";
import { AxiosError } from "axios";

export const useRegister = () => {
	const request = useRequest();

	const { setShowServerErrors } = useServerErrors();

	const router = useRouter();

	const { storeToken, storeProfile, storeLoginStatus } = useAuthStore();

	const mutate = async (payload: RegisterPayload) => {
		setShowServerErrors(false);

		const response = await request.post("auth/register", payload);
		return {
			profile: response?.data?.payload as User,
			token: response?.data?.payload?.token as string,
		};
	};

	return useMutation({
		mutationFn: mutate,
		onSuccess: (payload) => {
			storeProfile(payload?.profile);
			storeToken(payload?.token);
			storeLoginStatus(true);
			router.push("/portal/dashboard");
		},
		onError: (error: AxiosError) => setShowServerErrors(true),
	});
};
