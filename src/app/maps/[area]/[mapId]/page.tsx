import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
	ArrowLeft,
	ArrowRight,
	ChevronRight,
	Download,
	Maximize2,
} from "lucide-react";
import { AREA_LIST, getArea, getMaps, mapData, relatedMaps } from "@/lib/maps";
import ContactSidebar from "@/components/ContactSidebar";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import RelatedMaps from "@/components/RelatedMaps";
import { thumbUrl } from "@/lib/map-utils";

export const dynamicParams = false;

export function generateStaticParams() {
	return AREA_LIST.flatMap((area) =>
		mapData[area.key].map((map) => ({ area: area.slug, mapId: map.id })),
	);
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ area: string; mapId: string }>;
}): Promise<Metadata> {
	const { area: slug, mapId } = await params;
	const area = getArea(slug);
	const map = getMaps(slug).find((m) => m.id === mapId);
	if (!area || !map) return {};
	return {
		title: `${map.name} — ${area.name}`,
		description: `${map.name} — authority layout plan for ${area.name}. View the full plot layout and download the original scan free.`,
		alternates: { canonical: `/maps/${slug}/${mapId}` },
		// The original scan is ~1MB at 7014px; crawlers and WhatsApp reject that
		// size, so share the prebuilt thumbnail instead.
		openGraph: {
			type: "article",
			title: `${map.name} — ${area.name}`,
			images: [thumbUrl(map.imageUrl)],
		},
	};
}

export default async function MapDetailPage({
	params,
}: {
	params: Promise<{ area: string; mapId: string }>;
}) {
	const { area: slug, mapId } = await params;
	const area = getArea(slug);
	if (!area) notFound();

	const maps = getMaps(slug);
	const index = maps.findIndex((m) => m.id === mapId);
	if (index === -1) notFound();

	const map = maps[index];
	const prev = maps[index - 1];
	const next = maps[index + 1];

	return (
		<div className="container-page py-8 sm:py-10">
			<nav aria-label="Breadcrumb" className="mb-6">
				<ol className="flex flex-wrap items-center gap-1.5 text-sm text-brand-900/55">
					<li>
						<Link href="/" className="hover:text-brand-700">
							Home
						</Link>
					</li>
					<ChevronRight aria-hidden className="size-3.5" />
					<li>
						<Link href={`/maps/${slug}`} className="hover:text-brand-700">
							{area.name}
						</Link>
					</li>
					<ChevronRight aria-hidden className="size-3.5" />
					<li
						aria-current="page"
						className="line-clamp-1 font-medium text-brand-900"
					>
						{map.name}
					</li>
				</ol>
			</nav>

			<div className="flex flex-col gap-10 lg:flex-row lg:gap-12">
				<div className="min-w-0 flex-1">
					<h1 className="text-fluid-h2 font-extrabold text-balance text-brand-950">
						{map.name}
					</h1>
					<p className="mt-2 text-xs font-semibold tracking-widest text-brand-600 uppercase">
						{area.name}
					</p>

					<figure className="card-surface mt-6 overflow-hidden">
						{/* Checkered neutral backdrop keeps white scans legible. */}
						<div className="relative aspect-4/3 w-full bg-sand-100 sm:aspect-3/2">
							<Image
								src={map.imageUrl}
								alt={map.name}
								fill
								priority
								sizes="(max-width: 1024px) 100vw, 60vw"
								quality={80}
								className="object-contain"
							/>
						</div>
						<figcaption className="flex flex-wrap items-center gap-3 border-t border-sand-200 p-4">
							<a
								href={map.imageUrl}
								download={map.name}
								className="inline-flex items-center gap-2 rounded-xl bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-brand-800"
							>
								<Download aria-hidden className="size-4" />
								Download map
							</a>
							<a
								href={map.imageUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 rounded-xl border border-sand-200 px-5 py-2.5 text-sm font-semibold text-brand-800 transition-colors hover:bg-sand-100"
							>
								<Maximize2 aria-hidden className="size-4" />
								Full resolution
							</a>
						</figcaption>
					</figure>

					<section className="card-surface mt-6 p-5 sm:p-6">
						<h2 className="text-base font-bold text-brand-950">
							About this plan
						</h2>
						<p className="mt-2 text-sm leading-relaxed text-brand-900/70">
							{map.description}
						</p>
					</section>

					<nav
						aria-label="Nearby layout plans"
						className="mt-6 grid gap-3 sm:grid-cols-2"
					>
						{prev ? (
							<Link
								href={`/maps/${slug}/${prev.id}`}
								rel="prev"
								className="card-surface group flex items-center gap-3 p-4 transition-colors hover:border-brand-300"
							>
								<ArrowLeft
									aria-hidden
									className="size-4 shrink-0 text-brand-600 transition-transform group-hover:-translate-x-1"
								/>
								<span className="min-w-0">
									<span className="block text-xs text-brand-900/45">
										Previous
									</span>
									<span className="line-clamp-1 text-sm font-medium text-brand-950">
										{prev.name}
									</span>
								</span>
							</Link>
						) : (
							<span />
						)}
						{next && (
							<Link
								href={`/maps/${slug}/${next.id}`}
								rel="next"
								className="card-surface group flex items-center justify-end gap-3 p-4 text-right transition-colors hover:border-brand-300 sm:col-start-2"
							>
								<span className="min-w-0">
									<span className="block text-xs text-brand-900/45">Next</span>
									<span className="line-clamp-1 text-sm font-medium text-brand-950">
										{next.name}
									</span>
								</span>
								<ArrowRight
									aria-hidden
									className="size-4 shrink-0 text-brand-600 transition-transform group-hover:translate-x-1"
								/>
							</Link>
						)}
					</nav>
				<RelatedMaps
					maps={relatedMaps(slug, mapId)}
					areaSlug={slug}
					areaName={area.name}
				/>
				</div>

				<ContactSidebar />
			</div>

			<JsonLd
				data={breadcrumbs([
					{ name: "Home", path: "/" },
					{ name: area.name, path: `/maps/${slug}` },
					{ name: map.name, path: `/maps/${slug}/${mapId}` },
				])}
			/>
		</div>
	);
}
