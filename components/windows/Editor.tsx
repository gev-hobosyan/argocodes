import { FILES, WINDOWS } from "@/app/data";
import Window from "./Window";

const window_props = WINDOWS[2];

interface Props {
	focused: boolean;
	onFocus: () => void;
	onClose: () => void;
	fileId: string;
}

export default function Editor({ focused, onFocus, onClose, fileId }: Props) {
	const Component = FILES[fileId as "aboutme"];

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
				<Component />
			</Window>
		</>
	);
}
