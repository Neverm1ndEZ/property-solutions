"use client";
import React from "react";
import { mapData } from "@/components/map-data";
import MapCard from "@/components/global/MapCard";

export default function RandomMapsSection() {
	// Function to get random items from an array
	const getRandomItems = <T,>(arr: T[], count: number): T[] => {
		const shuffled = [...arr].sort(() => 0.5 - Math.random());
		return shuffled.slice(0, count);
	};

	// Get random maps from Greater Noida and Yamuna Expressway
	const greaterNoidaMaps = getRandomItems(mapData.greaterNoida, 4);
	const yamunaExpresswayMaps = getRandomItems(mapData.yamunaExpressway, 2);

	// Combine maps
	const randomMaps = [...greaterNoidaMaps, ...yamunaExpresswayMaps];

	return (
		<div>
			<h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-gray-200 pb-2">
				Featured Maps
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{randomMaps.map((map) => {
					// Determine which area this map belongs to for proper routing
					let area = "";
					if (mapData.greaterNoida.some((m) => m.id === map.id)) {
						area = "greater-noida";
					} else if (mapData.yamunaExpressway.some((m) => m.id === map.id)) {
						area = "yamuna-expressway";
					} else if (mapData.noidaExtension.some((m) => m.id === map.id)) {
						area = "noida-extension";
					}

					return <MapCard key={map.id} map={map} area={area} />;
				})}
			</div>
		</div>
	);
}
