import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
// 	variable: "--font-geist-sans",
// 	subsets: ["latin"],
// });

export const metadata: Metadata = {
	title: "Argo Codes",
	description: "A personal portfolio website designed by Argo",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`h-full antialiased`}>
			<body className="h-full w-full overflow-hidden">{children}</body>
		</html>
	);
}
