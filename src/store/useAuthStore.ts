import { User } from "@/types/resources/user";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
	profile: User;
	token: string;
	loggedIn: boolean;
	storeProfile: (profile: User) => void;
	storeToken: (token: string) => void;
	storeLoginStatus: (status: boolean) => void;
	restoreFactory: () => void;
}

const useAuthStore = create<AuthState>()(
	persist(
		(set) => ({
			profile: {} as User,
			token: "",
			loggedIn: false,
			storeProfile: (profile: User) => set({ profile }),
			storeToken: (token: string) => set({ token }),
			storeLoginStatus: (status: boolean) => set({ loggedIn: status }),
			restoreFactory: () => set({ profile: {} as User, token: "", loggedIn: false }),
		}),
		{
			name: "auth-storage",
		}
	)
);

export default useAuthStore;
