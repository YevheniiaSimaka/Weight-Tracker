import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
import RegisterModal from "./components/Modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/Modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import { usePathname } from "next/navigation";
import EntryModal from "./components/Modals/EntryModal";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const currentUser = await getCurrentUser();

	return (
		<html lang="en" className="dark">
			<head>
				<link rel="icon" href="/logo.png" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Jura:wght@300..700&display=swap"
					rel="stylesheet"
				></link>
			</head>
			<body className={`${inter.className} bg-neutral-900`}>
				<Header currentUser={currentUser} />
				<ToasterProvider />
				<RegisterModal />
				<LoginModal />
				<EntryModal />
				{/*         <Navbar currentUser={currentUser} />
				 */}{" "}
				{children}
			</body>
		</html>
	);
}
