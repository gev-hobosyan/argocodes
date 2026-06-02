import Image from "next/image";

interface Props {
	name: string;
	id: string;
}

export default function MD({ name, id }: Props) {
	return (
		<>
			<div className="flex flex-col items-center gap-0 cursor-pointer">
				<Image
					loading="eager"
					src={"/markdown.png"}
					alt={"folder"}
					width={65}
					height={65}
				></Image>
				<p className="text-sm">{name}</p>
			</div>
		</>
	);
}
