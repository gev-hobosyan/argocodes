import { WINDOWS, PROJECTS } from "@/app/data";
import Window from "./Window";
import Folder from "../files_types/Folder";
import {
	AppWindowMac,
	Book,
	ChevronLeft,
	ChevronRight,
	Clock,
	FolderIcon,
} from "lucide-react";
import { useMemo, useState } from "react";
import Link from "../files_types/Link";
import MD from "../files_types/MD";

const window_props = WINDOWS[0];

interface Props {
	focused: boolean;
	onFocus: () => void;
	onClose: () => void;
}

export default function Finder({ focused, onFocus, onClose }: Props) {
	const [currentFolder, setCurrentFolder] = useState<string | undefined>(
		undefined,
	);

	const folder = useMemo(() => {
		return PROJECTS.find((project) => project.id === currentFolder);
	}, [currentFolder]);

	const Component = useMemo(() => {
		if (folder) return folder.component;
	}, [folder]);

	return (
		<>
			<Window
				title={window_props.title}
				x={window_props.x}
				y={window_props.y}
				height={window_props.height}
				width={window_props.width}
				focused={focused}
				onFocus={onFocus}
				onClose={onClose}
				className="relative"
			>
				<div className="absolute top-1.5 left-35 flex">
					<ChevronLeft
						onClick={() => {
							if (currentFolder) setCurrentFolder(undefined);
						}}
						className={`w-5 ${currentFolder ? "stroke-white cursor-pointer" : "stroke-gray-500"}`}
					></ChevronLeft>
					<ChevronRight className="w-5 stroke-gray-500"></ChevronRight>
				</div>
				<div className="w-full h-full px-2 py-2 flex">
					<div className="w-[25%] liquid-glass-dark h-[calc(100%-30px)] rounded-2xl">
						<div className="px-3 py-2 text-sm flex flex-col gap-1">
							<div className="flex items-center justify-start gap-1 px-1 cursor-pointer">
								<Clock className="w-5"></Clock>
								<p className="cursor-pointer">Recents</p>
							</div>
							<p className="text-xs text-gray-500 font-bold cursor-default">
								Favorites
							</p>
							<div className="flex items-center justify-start gap-1 px-1 cursor-pointer">
								<FolderIcon className="w-5"></FolderIcon>
								<p className="cursor-pointer">Projects</p>
							</div>
							<div className="flex items-center justify-start gap-1 px-1 cursor-pointer">
								<Book className="w-5"></Book>
								<p className="cursor-pointer">Blog</p>
							</div>
							<div className="flex items-center justify-start gap-1 px-1 cursor-pointer">
								<AppWindowMac className="w-5"></AppWindowMac>
								<p className="cursor-pointer">Applications</p>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-4 grid-rows-5 w-[75%] h-[calc(100%-30px)] mt-3">
						{currentFolder && Component ? (
							<Component />
						) : (
							PROJECTS.map((project) => (
								<Folder
									key={project.id}
									title={project.title}
									id={project.id}
									onClick={() => setCurrentFolder(project.id)}
								></Folder>
							))
						)}
					</div>
				</div>
			</Window>
		</>
	);
}
