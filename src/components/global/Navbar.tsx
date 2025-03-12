"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
	const [hoveredItem, setHoveredItem] = useState<string | null>(null);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const handleDropdownEnter = () => {
		setHoveredItem("dropdown");
	};

	const handleDropdownLeave = () => {
		setHoveredItem(null);
	};

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
		// Close dropdown when closing menu
		if (mobileMenuOpen) setMobileDropdownOpen(false);
	};

	const toggleMobileDropdown = () => {
		setMobileDropdownOpen(!mobileDropdownOpen);
	};

	// Close dropdown when clicking outside
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setMobileDropdownOpen(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div className="z-50 w-full shadow-sm bg-white">
			<nav className="bg-white border-gray-200">
				<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
					{/* Left side: Home and Layout Map - visible on all screens */}
					<div className="flex items-center space-x-6 md:order-1">
						<Link
							href="/"
							className="block py-2 px-3 md:p-0 text-base"
							onMouseEnter={() => setHoveredItem("home")}
							onMouseLeave={() => setHoveredItem(null)}
							style={{
								color: hoveredItem === "home" ? "#059669" : "#111827",
							}}
						>
							Home
						</Link>

						{/* Dropdown item with hover effect - Desktop */}
						<div
							className="relative list-none hidden md:block"
							onMouseEnter={handleDropdownEnter}
							onMouseLeave={handleDropdownLeave}
						>
							<button
								className="flex items-center justify-between py-2 px-3 text-gray-900 rounded-sm md:p-0 text-base"
								style={{
									color: hoveredItem === "dropdown" ? "#059669" : "#111827",
								}}
							>
								Layout Map
								<svg
									className="w-2.5 h-2.5 ms-2.5"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 10 6"
								>
									<path
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="m1 1 4 4 4-4"
										style={{
											stroke:
												hoveredItem === "dropdown" ? "#059669" : "currentColor",
										}}
									/>
								</svg>
							</button>

							{/* Dropdown menu that appears on hover - Desktop */}
							<div
								className={`z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 absolute left-0 ${
									hoveredItem === "dropdown" ? "block" : "hidden"
								}`}
							>
								<ul className="py-2 text-sm text-gray-700">
									<li>
										<Link
											href="/maps/greater-noida"
											className="block px-6 py-2 hover:bg-gray-100 hover:text-green-600"
										>
											Greater Noida
										</Link>
									</li>
									<li>
										<Link
											href="/maps/yamuna-expressway"
											className="block px-6 py-2 hover:bg-gray-100 hover:text-green-600"
										>
											Yamuna Expressway
										</Link>
									</li>
									<li>
										<Link
											href="/maps/noida-extension"
											className="block px-6 py-2 hover:bg-gray-100 hover:text-green-600"
										>
											Noida Extension
										</Link>
									</li>
								</ul>
							</div>
						</div>

						{/* Layout map for mobile - only in mobile menu */}
						<div className="md:hidden block">
							<button
								onClick={toggleMobileDropdown}
								className="flex items-center py-2 text-gray-900 text-base"
							>
								Layout Map
								<svg
									className={`w-2.5 h-2.5 ms-2.5 transition-transform duration-200 ${
										mobileDropdownOpen ? "rotate-180" : ""
									}`}
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 10 6"
								>
									<path
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="m1 1 4 4 4-4"
									/>
								</svg>
							</button>

							{mobileDropdownOpen && (
								<div className="bg-gray-50 rounded-lg mt-1 py-2 px-4">
									<ul className="space-y-2 text-sm text-gray-700">
										<li>
											<Link
												href="/maps/greater-noida"
												className="block py-1.5 hover:text-green-600"
											>
												Greater Noida
											</Link>
										</li>
										<li>
											<Link
												href="/maps/yamuna-expressway"
												className="block py-1.5 hover:text-green-600"
											>
												Yamuna Exp. Side Maps
											</Link>
										</li>
										<li>
											<Link
												href="/maps/noida-extension"
												className="block py-1.5 hover:text-green-600"
											>
												Noida
											</Link>
										</li>
									</ul>
								</div>
							)}
						</div>
					</div>

					{/* Middle: Logo section */}
					<div className="flex justify-center md:order-2">
						<Link href="/" className="flex items-center">
							<Image
								src="/site-assets/logo.webp"
								alt="PS Logo"
								width={60}
								height={40}
								className="h-16 md:h-24 w-auto"
							/>
						</Link>
					</div>

					{/* Right side: About and Contact Us - Desktop */}
					<div className="hidden md:flex items-center space-x-6 md:order-3">
						<Link
							href="/about"
							className="block py-2 px-3 text-gray-900 rounded-sm md:border-0 md:p-0 text-base"
							onMouseEnter={() => setHoveredItem("about")}
							onMouseLeave={() => setHoveredItem(null)}
							style={{
								color: hoveredItem === "about" ? "#059669" : "#111827",
							}}
						>
							About
						</Link>
						<Link
							href="/contact"
							className="block py-2 px-3 text-gray-900 rounded-sm md:border-0 md:p-0 text-base"
							onMouseEnter={() => setHoveredItem("contact")}
							onMouseLeave={() => setHoveredItem(null)}
							style={{
								color: hoveredItem === "contact" ? "#059669" : "#111827",
							}}
						>
							Contact Us
						</Link>
					</div>

					{/* Mobile menu button */}
					<button
						type="button"
						className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:order-4"
						onClick={toggleMobileMenu}
						aria-controls="navbar-dropdown"
						aria-expanded={mobileMenuOpen}
					>
						<span className="sr-only">Open main menu</span>
						<svg
							className="w-5 h-5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 17 14"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M1 1h15M1 7h15M1 13h15"
							/>
						</svg>
					</button>

					{/* Mobile menu - toggleable */}
					<div
						className={`${
							mobileMenuOpen ? "block" : "hidden"
						} w-full md:hidden order-last mt-4`}
						id="navbar-dropdown"
					>
						<ul className="flex flex-col font-medium p-4 border border-gray-100 rounded-lg bg-gray-50">
							<li>
								<Link
									href="/about"
									className="block py-2 px-3 text-gray-900 hover:text-green-600"
									onClick={() => setMobileMenuOpen(false)}
								>
									About
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="block py-2 px-3 text-gray-900 hover:text-green-600"
									onClick={() => setMobileMenuOpen(false)}
								>
									Contact Us
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
