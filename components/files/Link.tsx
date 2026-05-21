import Image from "next/image";
import { redirect } from "next/navigation";

interface Props {
	name: string;
	href: string;
	icon: string;
}

export default function Link({ name, href, icon }: Props) {
	return (
		<>
			<div
				className="flex flex-col items-center gap-0 cursor-pointer"
				onClick={() => redirect(href)}
			>
				<Image
					loading="eager"
					src={icon}
					alt={"folder"}
					width={65}
					height={65}
				></Image>
				<p className="text-sm">{name}</p>
			</div>
		</>
	);
}
