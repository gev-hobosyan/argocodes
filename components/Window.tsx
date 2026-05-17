"use client";
import {
	MouseEventHandler,
	ReactNode,
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
	children: ReactNode;
	className?: string;
	focused: boolean;
	onFocus: () => void;
	onClose: () => void;
}

export default function Window({
	title,
	x,
	y,
	height,
	width,
	minHeight = 300,
	minWidth = 400,
	className = "",
	focused,
	onFocus,
	children,
	onClose,
}: Props) {
	const [pos, setPos] = useState({ x: x, y: y });
	const [size, setSize] = useState({ w: width, h: height });

	const [dragging, setDragging] = useState(false);
	const [resizing, setResizing] = useState(false);
	const dragStart = useRef<{
		mx: number;
		my: number;
		ox?: number;
		oy?: number;
		ow?: number;
		oh?: number;
	} | null>(null);

	const onTitleMouseDown: MouseEventHandler<HTMLDivElement> = (event) => {
		event.preventDefault();

		setDragging(true);
		onFocus();
		dragStart.current = {
			mx: event.clientX,
			my: event.clientY,
			ox: pos.x,
			oy: pos.y,
		};
	};

	const onResizeMouseDown: MouseEventHandler<HTMLDivElement> = (event) => {
		event.preventDefault();
		event.stopPropagation();

		setResizing(true);
		dragStart.current = {
			mx: event.clientX,
			my: event.clientY,
			oh: size.h,
			ow: size.w,
		};
	};

	useEffect(() => {
		const onMove = (event: globalThis.MouseEvent) => {
			if (dragging && dragStart.current) {
				const dx = event.clientX - dragStart.current.mx;
				const dy = event.clientY - dragStart.current.my;
				setPos({
					x: dragStart.current.ox! + dx,
					y: dragStart.current.oy! + dy,
				});
			}
			if (resizing && dragStart.current) {
				const dw = event.clientX - dragStart.current.mx;
				const dh = event.clientY - dragStart.current.my;

				setSize({
					w: Math.max(minWidth, dragStart.current.ow! + dw),
					h: Math.max(minHeight, dragStart.current.oh! + dh),
				});
			}
		};
		const onUp = (event: globalThis.MouseEvent) => {
			if ((dragging || setResizing) && dragStart.current) {
				setDragging(false);
				setResizing(false);
				dragStart.current = null;
			}
		};

		window.addEventListener("mousemove", onMove);
		window.addEventListener("mouseup", onUp);

		return () => {
			window.removeEventListener("mousemove", onMove);
			window.removeEventListener("mouseup", onUp);
		};
	}, [dragging, minHeight, minWidth, resizing]);

	return (
		<>
			<div
				className={`bg-gray-900 absolute rounded-2xl overflow-visible ${className}`}
				style={{
					width: size.w,
					height: size.h,
					top: pos.y,
					left: pos.x,
					zIndex: focused ? 50 : 20,
				}}
				onClick={onFocus}
			>
				<div className="relative w-full h-8" onMouseDown={onTitleMouseDown}>
					<ControllWindow x={10} y={10} onClose={onClose}></ControllWindow>
					<div className="absolute left-20 top-1.5 text-md font-bold cursor-default">
						<p>{title}</p>
					</div>
				</div>
			</div>
			<div
				className="absolute rounded-2xl"
				onMouseDown={onResizeMouseDown}
				style={{
					width: size.w + 10,
					height: size.h + 10,
					top: pos.y - 5,
					left: pos.x - 5,
					zIndex: 10,
					cursor: "nwse-resize",
				}}
			></div>
		</>
	);
}
