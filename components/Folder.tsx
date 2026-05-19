import Image from "next/image";

export default function Folder() {
	return (
		<>
			<div className="flex flex-col items-center gap-0">
				<Image
					loading="eager"
					src={"/folder.png"}
					alt={"folder"}
					width={70}
					height={70}
				></Image>
				<p className="text-sm">Glione</p>
			</div>
		</>
	);
}
