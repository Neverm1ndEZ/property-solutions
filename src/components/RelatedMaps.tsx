import Link from "next/link";
import { thumbUrl } from "@/lib/map-utils";
import type { MapItem } from "@/lib/map-utils";

export default function RelatedMaps({
	maps,
	areaSlug,
	areaName,
}: {
	maps: MapItem[];
	areaSlug: string;
	areaName: string;
}) {
	if (maps.length === 0) return null;

	return (
		<section className="mt-10" aria-labelledby="related-maps">
			<h2
				id="related-maps"
				className="text-xs font-semibold tracking-widest text-brand-600 uppercase"
			>
				Nearby in {areaName}
			</h2>
			<ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
				{maps.map((map) => (
					<li key={map.id}>
						<Link
							href={`/maps/${areaSlug}/${map.id}`}
							className="group card-surface flex h-full flex-col overflow-hidden transition-[transform,box-shadow] duration-300 ease-(--ease-out-soft) hover:-translate-y-1 hover:shadow-(--shadow-lift)"
						>
							<span className="block aspect-4/3 overflow-hidden bg-sand-100 p-1">
								{/* eslint-disable-next-line @next/next/no-img-element -- prebuilt 480px webp thumbnail. */}
								<img
									src={thumbUrl(map.imageUrl)}
									alt=""
									width={480}
									height={360}
									loading="lazy"
									decoding="async"
									className="h-full w-full bg-white object-contain transition-transform duration-500 ease-(--ease-out-soft) group-hover:scale-105"
								/>
							</span>
							{/* Padding lives on the wrapper: Chrome paints a clamped line
							    outside the box when the clamp and padding share an element. */}
							<span className="block p-2.5">
								<span className="line-clamp-2 text-xs leading-snug font-medium text-pretty text-brand-950 group-hover:text-brand-700">
									{map.name}
								</span>
							</span>
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
}
