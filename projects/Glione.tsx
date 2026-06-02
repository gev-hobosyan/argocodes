import ImageFile from "@/components/files_types/ImageFile";
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
			<MD name={"README.md"} id={"glione"}></MD>
			<div className="row-start-2">
				<ImageFile
					filename={"landing.png"}
					src={"/glione/glione-1.png"}
					id={"glione-1"}
				/>
			</div>
			<div className="row-start-2 col-start-2">
				<ImageFile
					filename={"login.png"}
					src={"/glione/glione-2.png"}
					id={"glione-2"}
				/>
			</div>
			<div className="row-start-2 col-start-3">
				<ImageFile
					filename={"dashboard.png"}
					src={"/glione/glione-3.png"}
					id={"glione-2"}
				/>
			</div>
		</>
	);
}
