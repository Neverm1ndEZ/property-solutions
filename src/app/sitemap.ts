import type { MetadataRoute } from "next";
import { ALL_MAPS, AREA_LIST } from "@/lib/maps";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{ url: SITE_URL, priority: 1 },
		{ url: `${SITE_URL}/about`, priority: 0.6 },
		{ url: `${SITE_URL}/contact`, priority: 0.6 },
		...AREA_LIST.map((a) => ({
			url: `${SITE_URL}/maps/${a.slug}`,
			priority: 0.8,
		})),
		// Each map page declares its plan image, so the scans are eligible for
		// Google Images — likely how someone hunting "sector 16 layout plan" lands.
		...ALL_MAPS.map((m) => ({
			url: `${SITE_URL}/maps/${m.area.slug}/${m.id}`,
			priority: 0.5,
			images: [`${SITE_URL}${encodeURI(m.imageUrl)}`],
		})),
	];
}
