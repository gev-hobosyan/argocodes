"use client";
import Dock from "@/components/Dock";
import Window from "@/components/Window";
import { useState } from "react";
import { WINDOWS } from "./windows";

export default function Home() {
	const [focusedWindow, setFocusedWindow] = useState(1);
	const [openWindows, setOpenWindows] = useState([WINDOWS[0]]);

	const onClose = (id: number) => {
		setOpenWindows((prev) => prev.filter((window) => window.id !== id));
	};

	const openWindow = (id: number) => {
		if (!openWindows.find((window) => window.id === id)) {
			setOpenWindows((prev) => [
				...prev,
				WINDOWS.find((window) => window.id === id)!,
			]);
		}

		setFocusedWindow(id);
	};

	return (
		<div className="relative font-sans bg-black min-h-screen w-full overflow-hidden">
			{openWindows.map((window) => (
				<Window
					key={window.id}
					title={window.title}
					x={window.x}
					y={window.y}
					height={window.height}
					width={window.width}
					focused={focusedWindow === window.id}
					onFocus={() => setFocusedWindow(window.id)}
					onClose={() => onClose(window.id)}
				>
					<></>
				</Window>
			))}
			<Dock openWindow={openWindow}></Dock>
		</div>
	);
}
