import { WINDOWS } from "@/app/windows";
import Image from "next/image";

interface Props {
	openWindow: (id: number) => void;
}

export default function Dock({ openWindow }: Props) {
	return (
		<>
			<div className="fixed z-50 bottom-7 -translate-x-1/2 left-1/2 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-between px-3 py-3 min-w-fit gap-3">
				{WINDOWS.map((window) => (
					<Image
						key={window.id}
						className="w-12 h-12 rounded-xl hover:-translate-y-2.5 transition-all duration-300 cursor-pointer"
						src={window.icon}
						alt={window.title}
						width={48}
						height={48}
						onClick={() => openWindow(window.id)}
					></Image>
				))}
			</div>
		</>
	);
}
