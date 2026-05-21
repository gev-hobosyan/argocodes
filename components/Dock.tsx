import { WINDOWS } from "@/app/data";
import Image from "next/image";

interface Props {
	openWindow: (id: string) => void;
}

export default function Dock({ openWindow }: Props) {
	return (
		<>
			<div className="fixed z-50 bottom-7 -translate-x-1/2 left-1/2 rounded-2xl flex items-center justify-between px-3 py-1.5 min-w-fit gap-3 liquid-glass">
				{WINDOWS.map((window) => (
					<Image
						loading="eager"
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
