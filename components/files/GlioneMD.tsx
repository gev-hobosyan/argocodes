import { X } from "lucide-react";
import Image from "next/image";

export default function GlioneMD() {
	return (
		<div className="h-full w-full rounded-b-2xl">
			<div className="h-7 w-full flex items-end px-1">
				<div className="bg-black w-40 h-7 rounded-t-lg px-3 flex justify-between">
					Glione.md
					<X className="w-3"></X>
				</div>
			</div>
			<div className="w-full h-[calc(100%-32px)] bg-black rounded-b-2xl px-4 py-2 relative">
				<h1 className="font-bold text-xl text-purple-400">
					Glione - Learn Python With Fun
				</h1>

				<h2 className="mt-2 text-lg text-purple-300">What is Glione?</h2>
				<p className="mt-1">
					Glione is an interactive Python and Computer Science learning
					platform where you learn new concepts, check your knowledge
					through questions and challenge your skill with an interesting
					problem. Glione turns learning Python into an adventure. Instead
					of dry tutorials you complete challenges, gain experience, and
					turn into a real programmer.
				</p>
				<p className="mt-2">
					Check it out for yourself -{" "}
					<a
						className="underline underline-offset-2 cursor-pointer text-purple-200"
						href="https://glione.vercel.app"
						target="_blank"
					>
						glione.vercel.app
					</a>
				</p>
				<p>
					Github -{" "}
					<a
						className="underline underline-offset-2 cursor-pointer text-purple-200"
						href="https://github.com/gev-hobosyan/glione.git"
						target="_blank"
					>
						github.com
					</a>
				</p>
			</div>
		</div>
	);
}
