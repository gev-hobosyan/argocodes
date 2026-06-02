"use client";
import Dock from "@/components/Dock";
import Finder from "@/components/windows/Finder";
import { useState } from "react";
import { WINDOWS } from "./data";
import Terminal from "@/components/windows/Terminal";
import Editor from "@/components/windows/Editor";
import MenuBar from "@/components/MenuBar";
import { WindowsContext } from "@/context/WindowsContext";

export default function Home() {
	const [focusedWindow, setFocusedWindow] = useState("editor");
	const [openWindows, setOpenWindows] = useState(["editor"]);
	const [editorFile, setEditorFile] = useState("glione");
	const [imagePreview, setImagePreview] = useState("/glione/glione-1.png");

	const onClose = (id: string) => {
		setOpenWindows((prev) => prev.filter((window) => window !== id));
	};

	const openWindow = (id: string) => {
		if (!openWindows.includes(id)) {
			setOpenWindows((prev) => [...prev, id]);
		}

		setFocusedWindow(id);
	};

	const openFile = (fileId: string) => {
		openWindow("editor");
		setEditorFile(fileId);
	};

	const openImage = (imagePath: string) => {
		openWindow("preview");
		setImagePreview(imagePath);
	};

	return (
		<div className="relative font-sans min-h-screen w-full overflow-hidden">
			<MenuBar></MenuBar>
			<WindowsContext.Provider value={{ openWindow, openFile, openImage }}>
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
								fileId={editorFile}
							></Editor>
						),
					};

					const Window =
						windows[window.id as "terminal" | "finder" | "editor"];

					return Window;
				})}
			</WindowsContext.Provider>
			<Dock openWindow={openWindow}></Dock>
		</div>
	);
}
