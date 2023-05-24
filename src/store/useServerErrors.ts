import { create } from "zustand";

interface ServerErrorsState {
	showServerErrors: boolean;
	setShowServerErrors: (show: boolean) => void;
}

const useServerErrors = create<ServerErrorsState>()((set) => ({
	showServerErrors: false,
	setShowServerErrors: (show: boolean) => set({ showServerErrors: show }),
}));

export default useServerErrors;
