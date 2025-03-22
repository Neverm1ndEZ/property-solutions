import React from "react";

export default function Hero() {
	return (
		<div className="bg-[url(/site-assets/hero.png)] bg-cover bg-no-repeat bg-center h-[70vh] flex items-center justify-center">
			<div className="bg-black/30 w-full h-full flex flex-col items-center justify-center text-center p-4">
				<h1 className="text-4xl md:text-6xl lg:text-7xl uppercase font-bold text-[#f5f5f0] mb-4 shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
					Property Solutions
				</h1>
				<h2 className="text-lg md:text-xl lg:text-2xl uppercase font-semibold text-[#f5f5f0] mb-4 underline shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
					Property Dealer in Greater Noida
				</h2>
				<h3 className="text-lg md:text-2xl lg:text-3xl uppercase font-semibold text-[#f5f5f0] max-w-5xl mx-auto shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
					Industrial plots | Residential plots | Factory | Warehouse
					<br />
					Greater Noida | Yamuna Expressway | Sikandrabad
					<br />
					<span className="text-base md:text-lg lg:text-xl uppercase font-semibold text-[#f5f5f0] mt-8 underline shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
						Best Property Dealer for Yamuna Expressway Authority Plots
					</span>
				</h3>
			</div>
		</div>
	);
}
