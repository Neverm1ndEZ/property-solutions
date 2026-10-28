import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { thumbUrl } from "@/lib/map-utils";

export default function AreaCard({
	name,
	slug,
	cover,
	count,
	eager = false,
}: {
	name: string;
	slug: string;
	cover: string;
	count: number;
	eager?: boolean;
}) {
	return (
		<Link
			href={`/maps/${slug}`}
			className="group card-surface relative flex aspect-5/4 flex-col justify-end overflow-hidden p-5 transition-[transform,box-shadow] duration-300 ease-(--ease-out-soft) hover:-translate-y-1.5 hover:shadow-(--shadow-lift) sm:aspect-4/3"
		>
			{/* eslint-disable-next-line @next/next/no-img-element -- prebuilt 480px webp thumbnail; routing it through next/image would re-optimise an already-optimal file. */}
			<img
				src={thumbUrl(cover)}
				alt=""
				width={480}
				height={360}
				loading={eager ? "eager" : "lazy"}
				decoding="async"
				className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-(--ease-out-soft) group-hover:scale-110"
			/>
			<div className="absolute inset-0 bg-linear-to-t from-brand-950 from-20% via-brand-950/80 via-55% to-brand-950/15" />

			<div className="relative text-white">
				<p className="text-xs font-semibold tracking-widest text-brand-300 uppercase">
					{count} layout plans
				</p>
				<h3 className="mt-1.5 flex items-start gap-1.5 text-xl font-bold tracking-tight text-balance sm:text-2xl">
					{name}
					<ArrowUpRight
						aria-hidden
						className="mt-1 size-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
					/>
				</h3>
			</div>
		</Link>
	);
}
