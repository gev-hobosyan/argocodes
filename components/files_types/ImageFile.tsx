import useWindowsContext from "@/context/WindowsContext";
import Image from "next/image";
import { useState } from "react";

interface Props {
	filename: string;
	src: string;
	id: string;
}

export default function ImageFile({ src, id, filename }: Props) {
	return (
		<>
			<div
				className="flex flex-col items-center gap-0 cursor-pointer"
				onClick={() => {}}
			>
				<Image
					loading="eager"
					src={src}
					alt={"folder"}
					width={100}
					height={200}
				></Image>
				<p className="text-sm">{filename}</p>
			</div>
		</>
	);
}
