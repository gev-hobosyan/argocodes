import { Maximize2, Minus, X } from "lucide-react";

interface Props {
	x: number;
	y: number;
	onClose: () => void;
}

export default function ControllWindow({ x, y, onClose }: Props) {
	return (
		<>
			<div
				className="absolute flex gap-1 items-center justify-center group"
				style={{
					top: y,
					left: x,
				}}
			>
				<div
					className="size-3.5 bg-red-600 rounded-full cursor-pointer flex items-center justify-center"
					onClick={onClose}
				>
					<X className="w-3 stroke-3 stroke-red-900 hidden group-hover:block"></X>
				</div>
				<div className="size-3.5 bg-yellow-400 rounded-full cursor-pointer flex items-center justify-center">
					<Minus className="w-3 stroke-3 stroke-yellow-600 hidden group-hover:block"></Minus>
				</div>
				<div className="size-3.5 bg-green-600 rounded-full cursor-pointer flex items-center justify-center">
					<Maximize2 className="w-2.5 stroke-3 stroke-green-700 rotate-90 hidden group-hover:block"></Maximize2>
				</div>
			</div>
		</>
	);
}
