import { WINDOWS } from "@/app/windows";
import Window from "./Window";

const window_props = WINDOWS[1];

interface Props {
	focused: boolean;
	onFocus: () => void;
	onClose: () => void;
}

export default function Terminal({ focused, onFocus, onClose }: Props) {
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
				<></>
			</Window>
		</>
	);
}
