import React from "react";

export default function Hero() {
	return (
		<div className="bg-[url(/site-assets/hero.webp)] bg-cover bg-center min-h-screen">
			<div className="flex flex-col items-center justify-center h-screen text-center space-y-5">
				<h1 className="text-7xl uppercase font-bold text-[#eee]">
					Property Solutions
				</h1>
				<h2 className="text-3xl uppercase font-bold text-[#424242]">
					Property Dealer in Greater Noida
				</h2>
				<h3 className="text-3xl uppercase font-bold text-[#eee] max-w-[1000px] mx-auto">
					Industrial plots | Residential plots | Factory | Warehouse Greater
					Noida | Yamuna Expressway | Sikandrabad
				</h3>
			</div>
		</div>
	);
}
