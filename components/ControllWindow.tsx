interface Props {
	x: number;
	y: number;
}

export default function ControllWindow({ x, y }: Props) {
	return (
		<>
			<div
				className="absolute flex gap-1 items-center justify-center"
				style={{
					top: y,
					left: x,
				}}
			>
				<div className="size-3.5 bg-red-600 rounded-full"></div>
				<div className="size-3.5 bg-yellow-400 rounded-full"></div>
				<div className="size-3.5 bg-green-600 rounded-full"></div>
			</div>
		</>
	);
}
