import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingActions from "@/components/FloatingActions";
import { ADDRESS, EMAIL, PHONE, SITE_NAME } from "@/lib/site";
import { AREA_LIST } from "@/lib/maps";

const jakarta = Plus_Jakarta_Sans({
	variable: "--font-plus-jakarta",
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	metadataBase: new URL("https://propertysolutions.in"),
	title: {
		default: `${SITE_NAME} — Plots in Greater Noida & Yamuna Expressway`,
		template: `%s | ${SITE_NAME}`,
	},
	description:
		"Industrial plots, factories, warehouses and residential plots across Greater Noida, Yamuna Expressway and Sikandrabad. Browse every authority layout plan in one place.",
	keywords: [
		"Greater Noida plots",
		"Yamuna Expressway plots",
		"industrial plot Greater Noida",
		"layout plan Greater Noida",
		"property dealer Greater Noida",
	],
	openGraph: {
		type: "website",
		siteName: SITE_NAME,
		title: `${SITE_NAME} — Plots in Greater Noida & Yamuna Expressway`,
		description:
			"Every authority layout plan for Greater Noida, Yamuna Expressway and Noida Extension, plus plots for sale and purchase.",
		images: ["/site-assets/hero-1920.webp"],
	},
	robots: { index: true, follow: true },
};

export const viewport: Viewport = {
	themeColor: "#0b2a20",
	colorScheme: "light",
};

const businessJsonLd = {
	"@context": "https://schema.org",
	"@type": "RealEstateAgent",
	name: SITE_NAME,
	telephone: PHONE,
	email: EMAIL,
	address: {
		"@type": "PostalAddress",
		streetAddress: "Tradex Tower 2, Alpha 1 Commercial Belt",
		addressLocality: "Greater Noida",
		addressRegion: "Uttar Pradesh",
		postalCode: "201308",
		addressCountry: "IN",
	},
	description: ADDRESS,
	openingHours: "Mo-Su 09:30-20:30",
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className={jakarta.variable}>
			<body className="flex min-h-dvh flex-col antialiased">
				<a
					href="#main"
					className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-99 focus:rounded-full focus:bg-brand-800 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
				>
					Skip to content
				</a>
				<SiteHeader
					areas={AREA_LIST.map(({ slug, name, count }) => ({
						slug,
						name,
						count,
					}))}
				/>
				<main id="main" className="flex-1">
					{children}
				</main>
				<SiteFooter />
				<FloatingActions />
				<script
					type="application/ld+json"
					suppressHydrationWarning
					dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
				/>
			</body>
		</html>
	);
}
