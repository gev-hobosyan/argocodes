import { WINDOWS } from "@/app/windows";
import Window from "./Window";
import Folder from "../Folder";
import { FolderArchive, FolderIcon, StickyNote } from "lucide-react";

const window_props = WINDOWS[0];

interface Props {
	focused: boolean;
	onFocus: () => void;
	onClose: () => void;
}

export default function Finder({ focused, onFocus, onClose }: Props) {
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
			>
				<div className="w-full h-full px-2 py-2 flex">
					<div className="w-[25%] liquid-glass-dark h-[calc(100%-30px)] rounded-2xl">
						<div className="px-3 py-2 text-sm flex flex-col gap-1">
							<p className="text-xs text-gray-500 font-bold cursor-default">
								Favorites
							</p>
							<div className="flex items-center justify-start gap-1 px-1">
								<FolderIcon className="w-5"></FolderIcon>
								<p className="cursor-pointer">Projects</p>
							</div>
							<div className="flex items-center justify-start gap-1 px-1">
								<StickyNote className="w-5"></StickyNote>
								<p className="cursor-pointer">Blog</p>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-4 grid-rows-5 w-[75%] h-[calc(100%-30px)]">
						<Folder></Folder>
					</div>
				</div>
			</Window>
		</>
	);
}
