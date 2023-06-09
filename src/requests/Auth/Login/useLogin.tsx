import useRequest from "@/requests/useRequest";
import useAuthStore from "@/store/useAuthStore";
import { User } from "@/types/resources/user.d";
import { LoginPayload } from "./schema.login";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import useServerErrors from "@/store/useServerErrors";
import { AxiosError } from "axios";
import { ServerError } from "@/types/global";

type LoginResponse = {
	profile: User;
	token: string;
};

const useLogin = () => {
	const request = useRequest();

	const { setShowServerErrors } = useServerErrors();

	const router = useRouter();

	const { storeToken, storeProfile, storeLoginStatus } = useAuthStore();

	const mutate = async (payload: LoginPayload): Promise<LoginResponse> => {
		setShowServerErrors(false);

		const response = await request.post("auth/login", payload);
		return {
			profile: response?.data?.payload,
			token: response?.data?.payload?.token,
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
		onError: (error: AxiosError<ServerError>) => setShowServerErrors(true),
	});
};

export default useLogin;
