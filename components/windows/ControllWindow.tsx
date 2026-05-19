interface Props {
	x: number;
	y: number;
	onClose: () => void;
}

export default function ControllWindow({ x, y, onClose }: Props) {
	return (
		<>
			<div
				className="absolute flex gap-1 items-center justify-center"
				style={{
					top: y,
					left: x,
				}}
			>
				<div
					className="size-3.5 bg-red-600 rounded-full cursor-pointer"
					onClick={onClose}
				></div>
				<div className="size-3.5 bg-yellow-400 rounded-full cursor-pointer"></div>
				<div className="size-3.5 bg-green-600 rounded-full cursor-pointer"></div>
			</div>
		</>
	);
}
