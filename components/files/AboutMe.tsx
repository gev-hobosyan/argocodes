import useWindowsContext from "@/context/WindowsContext";
import { X } from "lucide-react";

export default function AboutMe() {
	const openWindows = useWindowsContext();

	return (
		<div className="h-full w-full rounded-b-2xl">
			<div className="h-7 w-full flex items-end px-1">
				<div className="bg-black w-40 h-7 rounded-t-lg px-3 flex justify-between">
					AbouteMe.md
					<X className="w-3"></X>
				</div>
			</div>
			<div className="w-full h-[calc(100%-32px)] bg-black rounded-b-2xl px-4 py-2">
				<h1 className="font-bold text-lg text-purple-400">
					Hey there, I&apos;m Argo
				</h1>
				<p className="mt-2">
					I&apos;m a programmer driven by deep curiosity and a passion for
					building interesting &amp; impactful projects. As a natural
					problem-solver and fast learner, I thrive on diving into new
					technologies, breaking down complex challenges, and turning ideas
					into clean, functional code. I don&apos;t just write software - I
					love exploring how our everyday tools work and why do they work
					that way. Here are some links where you can see my work:
				</p>
				<p>
					Github -{" "}
					<a className="underline underline-offset-2 cursor-pointer text-purple-200">
						github.com
					</a>
				</p>
				<p>
					LinkedIn -{" "}
					<a className="underline underline-offset-2 cursor-pointer text-purple-200">
						linkedin.com
					</a>
				</p>

				<p className="mt-2">
					Also check out{" "}
					<span
						className="text-purple-200 underline cursor-pointer"
						onClick={() => {
							if (openWindows !== null) {
								openWindows("finder");
							}
						}}
					>
						my projects
					</span>
				</p>
			</div>
		</div>
	);
}
