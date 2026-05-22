"use client";
import Dock from "@/components/Dock";
import Finder from "@/components/windows/Finder";
import { useState } from "react";
import { WINDOWS } from "./data";
import Terminal from "@/components/windows/Terminal";
import Editor from "@/components/windows/Editor";
import MenuBar from "@/components/MenuBar";

export default function Home() {
	const [focusedWindow, setFocusedWindow] = useState("terminal");
	const [openWindows, setOpenWindows] = useState(["terminal"]);

	const onClose = (id: string) => {
		setOpenWindows((prev) => prev.filter((window) => window !== id));
	};

	const openWindow = (id: string) => {
		if (!openWindows.includes(id)) {
			setOpenWindows((prev) => [...prev, id]);
		}

		setFocusedWindow(id);
	};

	return (
		<div className="relative font-sans min-h-screen w-full overflow-hidden">
			<MenuBar></MenuBar>
			{openWindows.map((id) => {
				const window = WINDOWS.find((window) => window.id === id)!;

				const onFocus = () => {
					setFocusedWindow(id);
				};
				const closeWindow = () => {
					onClose(id);
				};
				const isFocused = focusedWindow === id;

				const windows = {
					finder: (
						<Finder
							key={id}
							focused={isFocused}
							onFocus={onFocus}
							onClose={closeWindow}
						></Finder>
					),
					terminal: (
						<Terminal
							key={id}
							focused={isFocused}
							onFocus={onFocus}
							onClose={closeWindow}
						></Terminal>
					),
					editor: (
						<Editor
							key={id}
							focused={isFocused}
							onFocus={onFocus}
							onClose={closeWindow}
						></Editor>
					),
				};

				const Window =
					windows[window.id as "terminal" | "finder" | "editor"];

				return Window;
			})}
			<Dock openWindow={openWindow}></Dock>
		</div>
	);
}
