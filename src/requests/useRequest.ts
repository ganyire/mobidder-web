import axios from "axios";
import useAuthStore from "@/store/useAuthStore";

type ContentType = "application/json" | "multipart/form-data";

const useRequest = (contentType: ContentType = "application/json") => {
	const { token } = useAuthStore();

	const request = axios.create({
		baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
		timeout: 300000,
		withCredentials: false,
		headers: {
			Accept: "application/json",
			"Content-Type": contentType,
			Authorization: `Bearer ${token}`,
		},
	});

	return request;
};

export default useRequest;
