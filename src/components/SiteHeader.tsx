"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import type { AreaSummary } from "@/lib/map-utils";
import { EMAIL, PHONE, PHONE_HREF } from "@/lib/site";
import CallbackForm from "@/components/CallbackForm";

const NAV = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About" },
	{ href: "/contact", label: "Contact" },
];

export default function SiteHeader({ areas }: { areas: AreaSummary[] }) {
	const [open, setOpen] = useState(false);
	const pathname = usePathname();
	const [lastPath, setLastPath] = useState(pathname);

	// The header stays mounted across App Router navigations, so close the sheet
	// when the route changes. Adjusting during render (rather than in an effect)
	// avoids a frame where the old page is gone but the menu is still open.
	if (pathname !== lastPath) {
		setLastPath(pathname);
		setOpen(false);
	}

	// Lock page scroll while the mobile sheet covers the viewport.
	useEffect(() => {
		if (!open) return;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);

	// Publish the real header height so anything else that sticks (the map
	// search bar) clears it. The strip wraps at narrow widths, so measuring
	// beats hard-coding a value per breakpoint.
	const barRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const el = barRef.current;
		if (!el) return;
		const ro = new ResizeObserver(([entry]) => {
			document.documentElement.style.setProperty(
				"--header-h",
				`${Math.round(entry.contentRect.height)}px`,
			);
		});
		ro.observe(el);
		return () => ro.disconnect();
	}, []);

	const isActive = (href: string) =>
		href === "/" ? pathname === "/" : pathname.startsWith(href);

	return (
		<header className="sticky top-0 z-50">
			<div ref={barRef}>
			<div className="bg-brand-950 text-white">
				<div className="container-page flex flex-col gap-2 py-2.5 sm:flex-row sm:items-center sm:justify-between">
					<div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-sm">
						<a
							href={`mailto:${EMAIL}`}
							className="inline-flex min-w-0 items-center gap-2 text-white/80 transition-colors hover:text-white"
						>
							<Mail aria-hidden className="size-4 shrink-0 text-brand-400" />
							<span className="truncate">{EMAIL}</span>
						</a>
						<a
							href={PHONE_HREF}
							className="inline-flex items-center gap-2 text-white/80 transition-colors hover:text-white"
						>
							<Phone aria-hidden className="size-4 shrink-0 text-brand-400" />
							<span className="font-medium tracking-wide">{PHONE}</span>
						</a>
					</div>
					<div className="hidden sm:block">
						<CallbackForm />
					</div>
				</div>
			</div>

			<div className="border-b border-sand-200 bg-white/85 backdrop-blur-xl">
				<div className="container-page flex h-16 items-center justify-between gap-4 md:h-20">
					<Link href="/" className="flex shrink-0 items-center gap-3">
						<Image
							src="/site-assets/logo.webp"
							alt="Property Solutions"
							width={120}
							height={80}
							priority
							className="h-11 w-auto md:h-14"
						/>
						<span className="hidden text-sm leading-tight font-bold tracking-tight text-brand-950 sm:block">
							Property
							<br />
							Solutions
						</span>
					</Link>

					<nav className="hidden items-center gap-1 md:flex">
						<NavLink href="/" label="Home" active={isActive("/")} />

						{/* CSS-only dropdown: hover for pointers, focus-within for keyboards. */}
						<div className="group relative">
							<button
								type="button"
								aria-haspopup="true"
								className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-brand-950/75 transition-colors group-hover:bg-sand-100 group-hover:text-brand-800 group-focus-within:bg-sand-100"
							>
								Layout maps
								<ChevronDown
									aria-hidden
									className="size-4 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180"
								/>
							</button>
							<div className="invisible absolute left-1/2 w-64 -translate-x-1/2 translate-y-1 pt-2 opacity-0 transition-[opacity,transform,visibility] duration-200 ease-(--ease-out-soft) group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
								<ul className="card-surface overflow-hidden p-1.5 shadow-(--shadow-lift)">
									{areas.map((area) => (
										<li key={area.slug}>
											<Link
												href={`/maps/${area.slug}`}
												className="flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-brand-950/80 transition-colors hover:bg-brand-50 hover:text-brand-800"
											>
												{area.name}
												<span className="rounded-full bg-sand-100 px-2 py-0.5 text-xs text-brand-900/50 tabular-nums">
													{area.count}
												</span>
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>

						<NavLink href="/about" label="About" active={isActive("/about")} />
						<NavLink
							href="/contact"
							label="Contact"
							active={isActive("/contact")}
						/>

						<a
							href={PHONE_HREF}
							className="ml-2 inline-flex items-center gap-2 rounded-full bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white shadow-(--shadow-soft) transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-brand-800"
						>
							<Phone aria-hidden className="size-4" />
							Call now
						</a>
					</nav>

					<button
						type="button"
						onClick={() => setOpen((v) => !v)}
						aria-expanded={open}
						aria-controls="mobile-nav"
						aria-label={open ? "Close menu" : "Open menu"}
						className="grid size-11 place-items-center rounded-full border border-sand-200 text-brand-900 transition-colors hover:bg-sand-100 md:hidden"
					>
						{open ? (
							<X aria-hidden className="size-5" />
						) : (
							<Menu aria-hidden className="size-5" />
						)}
					</button>
				</div>
			</div>
			</div>

			<div
				id="mobile-nav"
				hidden={!open}
				className="max-h-[calc(100dvh-8rem)] overflow-y-auto overscroll-contain border-b border-sand-200 bg-white shadow-(--shadow-lift) md:hidden"
			>
				<nav className="container-page flex flex-col gap-1 py-4">
					{NAV.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
								isActive(item.href)
									? "bg-brand-50 text-brand-800"
									: "text-brand-950/80 hover:bg-sand-100"
							}`}
						>
							{item.label}
						</Link>
					))}

					<p className="mt-3 px-4 text-xs font-semibold tracking-widest text-brand-900/40 uppercase">
						Layout maps
					</p>
					{areas.map((area) => (
						<Link
							key={area.slug}
							href={`/maps/${area.slug}`}
							className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-brand-950/80 transition-colors hover:bg-sand-100"
						>
							{area.name}
							<span className="rounded-full bg-sand-100 px-2 py-0.5 text-xs text-brand-900/50 tabular-nums">
								{area.count}
							</span>
						</Link>
					))}

					<div className="mt-4 rounded-2xl bg-brand-950 p-3 sm:hidden">
						<CallbackForm />
					</div>
				</nav>
			</div>
		</header>
	);
}

function NavLink({
	href,
	label,
	active,
}: {
	href: string;
	label: string;
	active: boolean;
}) {
	return (
		<Link
			href={href}
			aria-current={active ? "page" : undefined}
			className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
				active
					? "bg-brand-50 text-brand-800"
					: "text-brand-950/75 hover:bg-sand-100 hover:text-brand-800"
			}`}
		>
			{label}
		</Link>
	);
}
