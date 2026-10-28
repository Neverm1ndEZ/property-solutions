import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import AreaCard from "@/components/AreaCard";
import MapCard from "@/components/MapCard";
import ContactSidebar from "@/components/ContactSidebar";
import { ALL_MAPS, AREA_LIST } from "@/lib/maps";

/**
 * Picked once at build time on the server. The old version shuffled inside a
 * client component, which mismatched the server HTML on every hydration and
 * shipped the whole 1,200-line map dataset to the browser.
 */
const FEATURED = [...ALL_MAPS]
	.sort(() => Math.random() - 0.5)
	.slice(0, 6);

const STATS = [
	{ value: `${ALL_MAPS.length}`, label: "Authority layout plans" },
	{ value: `${AREA_LIST.length}`, label: "Regions covered" },
	{ value: "15+", label: "Years in the market" },
];

export default function Home() {
	return (
		<>
			<Hero />

			<section className="border-b border-sand-200 bg-white">
				<dl className="container-page grid grid-cols-3 divide-x divide-sand-200">
					{STATS.map((stat) => (
						<div key={stat.label} className="px-2 py-7 text-center sm:py-9">
							<dt className="sr-only">{stat.label}</dt>
							<dd>
								<span className="block text-2xl font-extrabold tracking-tight text-brand-800 tabular-nums sm:text-4xl">
									{stat.value}
								</span>
								<span className="mt-1 block text-[0.68rem] font-medium tracking-wide text-brand-900/55 uppercase sm:text-xs">
									{stat.label}
								</span>
							</dd>
						</div>
					))}
				</dl>
			</section>

			<div className="container-page flex flex-col gap-12 py-14 lg:flex-row lg:gap-12 lg:py-20">
				<div className="min-w-0 flex-1 space-y-16">
					<section className="reveal">
						<SectionHeading
							eyebrow="Explore by region"
							title="Property areas"
							description="Open any region to search its complete set of authority layout plans."
						/>
						<div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
							{AREA_LIST.map((area, i) => (
								<AreaCard
									key={area.slug}
									name={area.name}
									slug={area.slug}
									cover={area.cover}
									count={area.count}
									eager={i < 3}
								/>
							))}
						</div>
					</section>

					<section className="reveal">
						<SectionHeading
							eyebrow="Hand-picked"
							title="Featured layout maps"
							description="A sample from our library — every plan is free to view and download."
							action={
								<Link
									href="/maps/greater-noida"
									className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-900"
								>
									View all
									<ArrowRight
										aria-hidden
										className="size-4 transition-transform group-hover:translate-x-1"
									/>
								</Link>
							}
						/>
						<div className="mt-7 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
							{FEATURED.map((map) => (
								<MapCard key={map.id} map={map} areaSlug={map.area.slug} />
							))}
						</div>
					</section>
				</div>

				<ContactSidebar />
			</div>
		</>
	);
}

function SectionHeading({
	eyebrow,
	title,
	description,
	action,
}: {
	eyebrow: string;
	title: string;
	description?: string;
	action?: React.ReactNode;
}) {
	return (
		<div className="flex flex-wrap items-end justify-between gap-4">
			<div className="min-w-0">
				<p className="text-xs font-semibold tracking-widest text-brand-600 uppercase">
					{eyebrow}
				</p>
				<h2 className="text-fluid-h2 mt-2 font-extrabold text-brand-950">
					{title}
				</h2>
				{description && (
					<p className="mt-2 max-w-prose text-sm text-pretty text-brand-900/60">
						{description}
					</p>
				)}
			</div>
			{action}
		</div>
	);
}
