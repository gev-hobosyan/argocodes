import { VT323 } from "next/font/google";
import { COMMANDS, WINDOWS } from "@/app/data";
import Window from "./Window";
import { useCallback, useRef, useState } from "react";

const window_props = WINDOWS[1];

interface Props {
	focused: boolean;
	onFocus: () => void;
	onClose: () => void;
}

const vt = VT323({
	weight: "400",
});

export default function Terminal({ focused, onFocus, onClose }: Props) {
	const [history, setHistory] = useState<TerminalCommand[]>([]);
	const [command, setCommand] = useState("");
	const [scrollIndex, setScrollIndex] = useState<number>(-1);

	const ref = useRef<HTMLInputElement>(null);

	const runCommand = useCallback(() => {
		if (command) {
			const commandStruct = command.split(" ");

			if (commandStruct[0] in COMMANDS) {
				const c = commandStruct[0] as keyof typeof COMMANDS;

				const commandToRun = COMMANDS[c];

				commandStruct.shift();

				const res = commandToRun(...commandStruct);

				setHistory((prev) => {
					if (res[0] === ":clear:") {
						return [];
					}

					const newRecord: TerminalCommand = {
						command: command,
						result: res,
					};

					return [...prev, newRecord];
				});

				setCommand("");
				setScrollIndex(-1);
			}
		}
	}, [command]);

	const scrollHistory = useCallback(
		(direction: "up" | "down") => {
			if (history.length > scrollIndex && history.length > 0) {
				console.log(history.length, scrollIndex);

				if (direction === "up") {
					setScrollIndex((prev) => {
						if (history.toReversed()[prev + 1]) {
							setCommand(history.toReversed()[prev + 1].command);

							return prev === -1 ? 0 : prev + 1;
						}

						return prev;
					});
				} else {
				}
			}
		},
		[history, scrollIndex],
	);

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
				<div
					className={`w-full h-full bg-black rounded-b-2xl border-liquid shadow-liquid px-2 py-1 ${vt.className}`}
					style={{ overflow: "scroll" }}
					onClick={() => {
						if (ref !== null) {
							ref.current?.focus();
						}
					}}
				>
					{history.map((c, index) => (
						<div key={index} className="font-bold text-lg">
							<div className="flex gap-3 items-center justify-start">
								<p className="text-green-500 no-wrap">Argo ~ $</p>
								<p>{c.command}</p>
							</div>
							{c.result.map((line, index) => (
								<p key={index}>{line}</p>
							))}
						</div>
					))}

					<div className="flex gap-3 items-center justify-start">
						<p className="text-green-500 font-bold text-lg no-wrap">
							Argo ~ $
						</p>
						<input
							value={command}
							ref={ref}
							onChange={(e) => setCommand(e.target.value)}
							onKeyDown={(e) => {
								if (e.key === "Enter") runCommand();
								if (e.key === "ArrowUp") scrollHistory("up");
							}}
							autoFocus={true}
							className="focus:ring-0 ring-0 focus:outline-none font-bold text-lg w-[89%] m-0"
						></input>
					</div>
				</div>
			</Window>
		</>
	);
}

interface TerminalCommand {
	command: string;
	result: string[];
}
