import type { MetadataRoute } from "next";
import { ALL_MAPS, AREA_LIST } from "@/lib/maps";

const BASE = "https://propertysolutions.in";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{ url: BASE, priority: 1 },
		{ url: `${BASE}/about`, priority: 0.6 },
		{ url: `${BASE}/contact`, priority: 0.6 },
		...AREA_LIST.map((a) => ({ url: `${BASE}/maps/${a.slug}`, priority: 0.8 })),
		...ALL_MAPS.map((m) => ({
			url: `${BASE}/maps/${m.area.slug}/${m.id}`,
			priority: 0.5,
		})),
	];
}
