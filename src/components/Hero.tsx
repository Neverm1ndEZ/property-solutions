import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { ALL_MAPS } from "@/lib/maps";
import { PHONE_HREF } from "@/lib/site";

const CHIPS = [
	"Industrial plots",
	"Residential plots",
	"Factory",
	"Warehouse",
	"Commercial",
];

export default function Hero() {
	return (
		<section className="relative isolate flex min-h-[72svh] items-center overflow-hidden sm:min-h-[78svh]">
			{/*
			 * Was a 5.6MB PNG set as a CSS background — invisible to the preloader
			 * and unoptimisable. next/image with priority makes it the LCP element.
			 */}
			<Image
				src="/site-assets/hero-1920.webp"
				alt=""
				fill
				priority
				fetchPriority="high"
				sizes="100vw"
				className="-z-10 object-cover"
			/>
			<div className="absolute inset-0 -z-10 bg-linear-to-b from-brand-950/80 via-brand-950/60 to-brand-950/85" />

			<div className="container-page py-20 text-center text-white sm:py-24">
				<p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase backdrop-blur-sm">
					<span className="size-1.5 rounded-full bg-brand-400" />
					Trusted property dealer since 2009
				</p>

				<h1 className="text-fluid-hero mt-6 font-extrabold text-balance uppercase">
					Property Solutions
				</h1>

				<p className="mx-auto mt-5 max-w-2xl text-base text-balance text-white/80 sm:text-lg">
					Buy and sell plots across{" "}
					<strong className="font-semibold text-white">Greater Noida</strong>,
					the{" "}
					<strong className="font-semibold text-white">
						Yamuna Expressway
					</strong>{" "}
					and <strong className="font-semibold text-white">Sikandrabad</strong>{" "}
					— with every authority layout plan in one place.
				</p>

				<ul className="mt-7 flex flex-wrap justify-center gap-2">
					{CHIPS.map((chip) => (
						<li
							key={chip}
							className="rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white/85 backdrop-blur-sm sm:text-sm"
						>
							{chip}
						</li>
					))}
				</ul>

				<div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
					<Link
						href="/maps/greater-noida"
						className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-900 shadow-(--shadow-lift) transition-transform hover:-translate-y-0.5 active:translate-y-0"
					>
						Browse {ALL_MAPS.length} layout maps
						<ArrowRight
							aria-hidden
							className="size-4 transition-transform group-hover:translate-x-1"
						/>
					</Link>
					<a
						href={PHONE_HREF}
						className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
					>
						<Phone aria-hidden className="size-4" />
						Talk to us
					</a>
				</div>
			</div>
		</section>
	);
}
