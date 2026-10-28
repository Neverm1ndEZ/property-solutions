"use client";
import { useDeferredValue, useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import MapCard from "@/components/MapCard";
import type { MapItem } from "@/lib/map-utils";

/**
 * Client-side filter over one area's maps. The list is a few hundred items, so
 * a plain substring scan is well under a frame; useDeferredValue keeps typing
 * responsive if a slow device ever disagrees.
 */
export default function MapGrid({
	maps,
	areaSlug,
}: {
	maps: MapItem[];
	areaSlug: string;
}) {
	const [query, setQuery] = useState("");
	const deferred = useDeferredValue(query);

	const results = useMemo(() => {
		const q = deferred.trim().toLowerCase();
		if (!q) return maps;
		return maps.filter((m) => m.name.toLowerCase().includes(q));
	}, [maps, deferred]);

	return (
		<>
			<div className="sticky top-[var(--header-h,8rem)] z-30 -mx-4 mb-8 bg-sand-50/85 px-4 py-3 backdrop-blur-md sm:-mx-6 sm:px-6">
				<div className="relative mx-auto max-w-xl">
					<Search
						aria-hidden
						className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-brand-900/40"
					/>
					<input
						type="search"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						placeholder={`Search ${maps.length} layout plans…`}
						aria-label="Search layout plans"
						className="w-full rounded-full border border-sand-200 bg-white py-3 pr-11 pl-11 text-sm shadow-(--shadow-soft) transition-shadow outline-none placeholder:text-brand-900/35 focus:border-brand-300 focus:shadow-(--shadow-lift)"
					/>
					{query && (
						<button
							type="button"
							onClick={() => setQuery("")}
							aria-label="Clear search"
							className="absolute top-1/2 right-3 grid size-7 -translate-y-1/2 place-items-center rounded-full text-brand-900/45 transition-colors hover:bg-sand-100 hover:text-brand-800"
						>
							<X className="size-4" />
						</button>
					)}
				</div>
			</div>

			<p aria-live="polite" className="sr-only">
				{results.length} layout plans match
			</p>

			{results.length === 0 ? (
				<p className="py-24 text-center text-brand-900/60">
					No layout plan matches “{query.trim()}”.
				</p>
			) : (
				<div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
					{results.map((map, i) => (
						// content-visibility lets the browser skip layout/paint for
						// offscreen cards — the difference between smooth and janky at 179.
						<div
							key={map.id}
							className="h-full [contain-intrinsic-size:auto_320px] [content-visibility:auto]"
						>
							<MapCard map={map} areaSlug={areaSlug} eager={i < 10} />
						</div>
					))}
				</div>
			)}
		</>
	);
}
