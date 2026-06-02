import { createContext, useContext } from "react";

interface WindowsContextInterface {
	openWindow: (id: string) => void;
	openFile: (id: string) => void;
	openImage: (id: string) => void;
}

export const WindowsContext = createContext<WindowsContextInterface | null>(
	null,
);

export default function useWindowsContext() {
	return useContext(WindowsContext);
}
