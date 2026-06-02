import AboutMe from "@/components/files/AboutMe";
import Argo from "@/projects/Argo";
import Glione from "@/projects/Glione";

export const WINDOWS = [
	{
		id: "finder",
		title: "Finder",
		x: 100,
		y: 90,
		height: 500,
		width: 700,
		icon: "/folder.png",
	},
	{
		id: "terminal",
		title: "Terminal",
		x: 200,
		y: 100,
		height: 500,
		width: 700,
		icon: "/terminal.png",
	},
	{
		id: "editor",
		title: "Editor",
		x: 200,
		y: 130,
		height: 600,
		width: 700,
		icon: "/zed.png",
	},
];

export const PROJECTS = [
	{
		id: "glione",
		title: "Glione",
		component: Glione,
	},
	{
		id: "argo.sh",
		title: "Argo.sh",
		component: Argo,
	},
];

export const COMMANDS = {
	echo: (...args: string[]) => {
		return [args.join(" ")];
	},
	ls: (...args: string[]) => {
		if (args[0] === "projects") {
			return PROJECTS.map((project) => `⎬ ${project.id}`)!;
		}

		if (args.length !== 0) {
			return [`ls: ${args[0]}: No such file or directory`];
		}

		return ["Please provide the directory name"];
	},
	help: (...args: string[]) => {
		return [
			"help - see all commands",
			"ls [directory] - see contents of the directory",
			"echo [message] - print the message in terminal",
			"clear - clear command history",
		];
	},
	clear: (...args: string[]) => {
		return [":clear:"];
	},
};

export const FILES = {
	aboutme: AboutMe,
};
