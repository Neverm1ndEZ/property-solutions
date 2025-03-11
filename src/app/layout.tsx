import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/global/Topbar";
import Navbar from "@/components/global/Navbar";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Property Solutions",
	description:
		"Industrial plots , Factory, Warehouse- Greater Noida | Yamuna Expressway | Sikandrabad",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<div className="sticky top-0 z-50 shadow-md">
					<Topbar />
					<Navbar />
				</div>
				{children}
			</body>
		</html>
	);
}
