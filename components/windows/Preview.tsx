/* eslint-disable @next/next/no-img-element */
import { FILES, WINDOWS } from "@/app/data";
import Window from "./Window";

const window_props = WINDOWS[3];

interface Props {
	focused: boolean;
	onFocus: () => void;
	onClose: () => void;
	imagePath: string;
}

export default function Editor({
	focused,
	onFocus,
	onClose,
	imagePath,
}: Props) {
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
				<div>
					<img src={imagePath} alt={imagePath}></img>
				</div>
			</Window>
		</>
	);
}
