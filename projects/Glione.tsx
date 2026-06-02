import Link from "@/components/files_types/Link";
import MD from "@/components/files_types/MD";

export default function Glione() {
	return (
		<>
			<Link
				name={"Github"}
				href={"https://github.com/gev-hobosyan/glione.git"}
				icon={"/github.png"}
			></Link>
			<Link
				name={"Glione"}
				href={"https://glione.vercel.app"}
				icon={"/glione.png"}
			></Link>
			<MD name={"README.md"} id={""}></MD>
		</>
	);
}
