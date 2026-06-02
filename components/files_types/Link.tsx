import Image from "next/image";

interface Props {
	name: string;
	href: string;
	icon: string;
}

export default function Link({ name, href, icon }: Props) {
	return (
		<>
			<div className="flex flex-col items-center gap-0 cursor-pointer">
				<a href={href} target="_blank">
					<Image
						loading="eager"
						src={icon}
						alt={"folder"}
						width={65}
						height={65}
					></Image>
				</a>
				<p className="text-sm">{name}</p>
			</div>
		</>
	);
}
