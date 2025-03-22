import { mapData } from "@/components/map-data";
import MapCard from "@/components/global/MapCard";

export async function generateStaticParams() {
	return [
		{ area: "greater-noida" },
		{ area: "yamuna-expressway" },
		{ area: "noida-extension" },
	];
}

export default async function MapGridPage({
	params,
}: {
	params: Promise<{ area: string }>;
}) {
	const { area } = await params;

	// Convert URL format (greater-noida) to data format (greaterNoida)
	const areaKey = area.replace(/-([a-z])/g, (g) => g[1].toUpperCase());

	// Get maps for this area
	const maps = mapData[areaKey as keyof typeof mapData] || [];

	// Area display names
	const areaNames = {
		greaterNoida: "Greater Noida",
		yamunaExpressway: "Yamuna Expressway",
		noidaExtension: "Noida Extension",
	};

	return (
		<div className="container mx-auto px-4 py-8 min-h-screen">
			<h1 className="text-3xl font-bold mb-8">
				{areaNames[areaKey as keyof typeof areaNames]} Maps
			</h1>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{maps.map((map) => (
					<MapCard key={map.id} map={map} area={area} />
				))}
			</div>
		</div>
	);
}
