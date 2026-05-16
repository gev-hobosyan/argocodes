"use client";
import {
	MouseEvent,
	MouseEventHandler,
	useEffect,
	useRef,
	useState,
} from "react";
import ControllWindow from "./ControllWindow";

interface Props {
	title: string;
	x: number;
	y: number;
	height: number;
	width: number;
	minHeight?: number;
	minWidth?: number;
}

export default function Window({
	title,
	x,
	y,
	height,
	width,
	minHeight = 300,
	minWidth = 400,
}: Props) {
	const [pos, setPos] = useState({ x: x, y: y });
	const [size, setSize] = useState({ w: width, h: height });

	const [dragging, setDragging] = useState(false);
	const dragStart = useRef<{
		mx: number;
		my: number;
		ox: number;
		oy: number;
	} | null>(null);

	const onTitleMouseDown: MouseEventHandler<HTMLDivElement> = (event) => {
		event.preventDefault();

		setDragging(true);
		dragStart.current = {
			mx: event.clientX,
			my: event.clientY,
			ox: pos.x,
			oy: pos.y,
		};
	};

	useEffect(() => {
		const onMove = (event: globalThis.MouseEvent) => {
			if (dragging && dragStart.current) {
				const dx = event.clientX - dragStart.current.mx;
				const dy = event.clientY - dragStart.current.my;
				setPos({
					x: dragStart.current.ox + dx,
					y: dragStart.current.oy + dy,
				});

				console.log("Move");
			}
		};
		const onUp = (event: globalThis.MouseEvent) => {
			if (dragging && dragStart.current) {
				setDragging(false);
				dragStart.current = null;
			}
		};

		window.addEventListener("mousemove", onMove);
		window.addEventListener("mouseup", onUp);

		return () => {
			window.removeEventListener("mousemove", onMove);
			window.removeEventListener("mouseup", onUp);
		};
	}, [dragging]);

	return (
		<>
			<div
				className="bg-gray-900 absolute rounded-2xl"
				style={{
					width: size.w,
					height: size.h,
					top: pos.y,
					left: pos.x,
					zIndex: 20,
				}}
			>
				<div
					className="relative w-full h-8"
					onMouseDown={onTitleMouseDown}
				>
					<ControllWindow x={10} y={10}></ControllWindow>
					<div className="absolute left-20 top-1.5 text-md font-bold">
						<p>{title}</p>
					</div>
				</div>
			</div>
		</>
	);
}
