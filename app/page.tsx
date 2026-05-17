"use client";
import Window from "@/components/Window";
import { useState } from "react";

const WINDOWS = [
	{ id: 1, title: "Finder", х: 100, y: 90, height: 500, width: 700 },
	{ id: 2, title: "Terminal", х: 200, y: 100, height: 500, width: 700 },
	{ id: 3, title: "Editor", х: 500, y: 230, height: 400, width: 1000 },
];

export default function Home() {
	const [focusedWindow, setFocusedWindow] = useState(1);

	console.log(focusedWindow);

	return (
		<div className="relative font-sans bg-black">
			{WINDOWS.map((window) => (
				<Window
					key={window.id}
					title={window.title}
					x={window.х}
					y={window.y}
					height={window.height}
					width={window.width}
					focused={focusedWindow === window.id}
					onFocus={() => setFocusedWindow(window.id)}
				>
					<></>
				</Window>
			))}
		</div>
	);
}
