import { Atom } from "lucide-react";

export default function MenuBar() {
	return (
		<>
			<div className="fixed top-0 left-0 w-full h-8 bg-transparent backdrop-blur-sm flex justify-start items-center px-2 py-2 gap-4 text-sm z-51">
				<Atom></Atom>
				<p className="font-bold text-base">Finder</p>
				<p>File</p>
				<p>Edit</p>
				<p>View</p>
				<p>Go</p>
				<p>Window</p>
				<p>Help</p>
			</div>
		</>
	);
}
