import projects from "./projects.json";

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
		x: 500,
		y: 230,
		height: 400,
		width: 1000,
		icon: "/zed.png",
	},
];

export const PROJECTS = projects;

export const COMMANDS = {
	echo: (...args: string[]) => {
		return [args.join(" ")];
	},
	ls: (...args: string[]) => {
		if (args[0] === "projects") {
			return PROJECTS.map((project) => `⎬ ${project.id}`)!;
		}

		return [];
	},
	help: (...args: string[]) => {
		return [
			"   help - see all commands",
			"   ls [directory] - see contents of the directory",
			"   echo [message] - print the message in terminal",
		];
	},
};
