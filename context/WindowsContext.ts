import { createContext, useContext } from "react";

export const WindowsContext = createContext<((id: string) => void) | null>(
	null,
);

export default function useWindowsContext() {
	return useContext(WindowsContext);
}
