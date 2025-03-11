"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
	const [hoveredItem, setHoveredItem] = useState<string | null>(null);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const handleDropdownEnter = () => {
		setHoveredItem("dropdown");
	};

	const handleDropdownLeave = () => {
		setHoveredItem(null);
	};

	return (
		<div>
			<nav className="sticky top-0 bg-white border-gray-200">
				<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
					{/* Left side: Home and Layout Map */}
					<div className="flex items-center space-x-6">
						<Link
							href="/"
							className="block py-2 px-3 md:p-0"
							onMouseEnter={() => setHoveredItem("home")}
							onMouseLeave={() => setHoveredItem(null)}
							style={{
								color: hoveredItem === "home" ? "#059669" : "#111827",
							}}
						>
							Home
						</Link>

						{/* Dropdown item with hover effect */}
						<div
							className="relative list-none"
							onMouseEnter={handleDropdownEnter}
							onMouseLeave={handleDropdownLeave}
							ref={dropdownRef}
						>
							<button
								className="flex items-center justify-between py-2 px-3 text-gray-900 rounded-sm md:p-0"
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

							{/* Dropdown menu that appears on hover */}
							<div
								className={`z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 absolute left-0 ${
									hoveredItem === "dropdown" ? "block" : "hidden"
								}`}
							>
								<ul className="py-2 text-sm text-gray-700">
									<li>
										<Link
											href="/properties/greater-noida"
											className="block px-6 py-2 hover:bg-gray-100 hover:text-green-600"
										>
											Greater Noida
										</Link>
									</li>
									<li>
										<Link
											href="/properties/yamuna-express-side-maps"
											className="block px-6 py-2 hover:bg-gray-100 hover:text-green-600"
										>
											Yamuna Exp. Side Maps
										</Link>
									</li>
									<li>
										<Link
											href="/properties/noida"
											className="block px-6 py-2 hover:bg-gray-100 hover:text-green-600"
										>
											Noida
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>

					{/* Middle: Logo section */}
					<div className="flex justify-center">
						<Link href="/" className="flex items-center">
							<Image
								src="/site-assets/logo.webp"
								alt="PS Logo"
								width={60}
								height={40}
								className="h-24 w-auto"
							/>
						</Link>
					</div>

					{/* Right side: About and Contact Us */}
					<div className="hidden md:flex items-center space-x-6">
						<Link
							href="/about"
							className="block py-2 px-3 text-gray-900 rounded-sm md:border-0 md:p-0"
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
							className="block py-2 px-3 text-gray-900 rounded-sm md:border-0 md:p-0"
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
						className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
						aria-controls="navbar-dropdown"
						aria-expanded="false"
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

					{/* Mobile menu - hidden by default */}
					<div className="hidden w-full md:hidden" id="navbar-dropdown">
						<ul className="flex flex-col font-medium p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50">
							<li>
								<Link
									href="/about"
									className="block py-2 px-3 text-gray-900 hover:text-green-600"
								>
									About
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="block py-2 px-3 text-gray-900 hover:text-green-600"
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
