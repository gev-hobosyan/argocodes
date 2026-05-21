import Image from "next/image";

interface Props {
	title: string;
	id: string;
	onClick: () => void;
}

export default function Folder({ title, id, onClick }: Props) {
	return (
		<>
			<div
				className="flex flex-col items-center gap-0 cursor-pointer"
				onClick={onClick}
			>
				<Image
					loading="eager"
					src={"/folder.png"}
					alt={"folder"}
					width={70}
					height={70}
				></Image>
				<p className="text-sm">{title}</p>
			</div>
		</>
	);
}
