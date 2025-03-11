import React from "react";

export default function Hero() {
	return (
		<div className="bg-[url(/site-assets/hero.webp)] bg-cover bg-center h-[70vh] flex items-center justify-center">
			<div className="bg-black/30 w-full h-full flex flex-col items-center justify-center text-center p-4">
				<h1 className="text-4xl md:text-6xl lg:text-7xl uppercase font-bold text-white mb-4">
					Property Solutions
				</h1>
				<h2 className="text-xl md:text-2xl lg:text-3xl uppercase font-semibold text-white mb-4">
					Property Dealer in Greater Noida
				</h2>
				<h3 className="text-lg md:text-xl lg:text-2xl uppercase font-semibold text-white max-w-4xl mx-auto">
					Industrial plots | Residential plots | Factory | Warehouse
					<br />
					Greater Noida | Yamuna Expressway | Sikandrabad
				</h3>
			</div>
		</div>
	);
}
