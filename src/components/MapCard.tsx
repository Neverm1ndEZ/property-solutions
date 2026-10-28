import Link from "next/link";
import { thumbUrl, type MapItem } from "@/lib/map-utils";

/**
 * Server component. The thumbnail is a prebuilt ~28KB webp (`pnpm img`), so the
 * grid never touches the 7000px originals and never hits the image optimizer.
 */
export default function MapCard({
	map,
	areaSlug,
	eager = false,
}: {
	map: MapItem;
	areaSlug: string;
	eager?: boolean;
}) {
	const href = `/maps/${areaSlug}/${map.id}`;

	return (
		<article className="group card-surface flex h-full flex-col overflow-hidden transition-[transform,box-shadow] duration-300 ease-(--ease-out-soft) hover:-translate-y-1 hover:shadow-(--shadow-lift) focus-within:-translate-y-1 focus-within:shadow-(--shadow-lift)">
			<Link
				href={href}
				tabIndex={-1}
				aria-hidden
				className="relative block aspect-4/3 overflow-hidden bg-sand-100 p-1"
			>
				{/* eslint-disable-next-line @next/next/no-img-element -- prebuilt 480px webp thumbnail; routing it through next/image would re-optimise an already-optimal file. */}
				<img
					src={thumbUrl(map.imageUrl)}
					alt=""
					width={480}
					height={360}
					loading={eager ? "eager" : "lazy"}
					fetchPriority={eager ? "high" : "auto"}
					decoding="async"
					className="h-full w-full bg-white object-contain transition-transform duration-500 ease-(--ease-out-soft) group-hover:scale-105"
				/>
				<span className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-black/40 to-transparent" />
			</Link>

			<div className="flex flex-1 flex-col gap-3 p-4">
				<h3 className="line-clamp-3 text-sm leading-snug font-semibold text-pretty text-brand-950 sm:line-clamp-2">
					<Link href={href} className="hover:text-brand-700">
						{map.name}
					</Link>
				</h3>

				<div className="mt-auto flex flex-col items-start gap-1.5 border-t border-sand-200 pt-3 text-xs font-semibold tracking-wide uppercase sm:flex-row sm:items-center sm:justify-between sm:gap-2">
					<Link href={href} className="text-brand-600 hover:text-brand-800">
						View map
					</Link>
					{/* Native download — same-origin, so no JS and no client bundle. */}
					<a
						href={map.imageUrl}
						download={map.name}
						className="text-brand-900/45 hover:text-brand-700"
					>
						Download
					</a>
				</div>
			</div>
		</article>
	);
}
