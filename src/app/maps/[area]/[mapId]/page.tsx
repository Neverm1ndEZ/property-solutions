import Image from "next/image";
import Link from "next/link";
import { mapData } from "@/components/map-data";
import DownloadButton from "@/components/global/DownloadButton";

export async function generateStaticParams() {
	const params = [];

	// For each area, generate params for each map
	for (const [areaKey, maps] of Object.entries(mapData)) {
		// Convert camelCase to kebab-case for URLs
		const areaParam = areaKey
			.replace(/([a-z0-9])([A-Z])/g, "$1-$2")
			.toLowerCase();

		for (const map of maps) {
			params.push({
				area: areaParam,
				mapId: map.id,
			});
		}
	}

	return params;
}

export default async function MapDetailPage({
	params,
}: {
	params: Promise<{ area: string; mapId: string }>;
}) {
	const { area, mapId } = await params;
	// Convert URL format to data format
	const areaKey = area.replace(/-([a-z])/g, (g) => g[1].toUpperCase());

	// Find the specific map
	const map = mapData[areaKey as keyof typeof mapData]?.find(
		(m) => m.id === mapId,
	);

	if (!map) {
		return <div className="text-center py-20">Map not found</div>;
	}

	// Area display names
	const areaNames = {
		greaterNoida: "Greater Noida",
		yamunaExpressway: "Yamuna Expressway",
		noidaExtension: "Noida Extension",
	};

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="mb-6">
				<Link href={`/maps/${area}`} className="text-blue-600 hover:underline">
					← Back to {areaNames[areaKey as keyof typeof areaNames]} Maps
				</Link>
			</div>

			<h1 className="text-3xl font-bold mb-6">{map.name}</h1>

			<div className="bg-white rounded-lg shadow-lg overflow-hidden">
				<div className="relative w-full h-[70vh]">
					<Image
						src={map.imageUrl}
						alt={map.name}
						fill
						sizes="100vw"
						className="object-contain"
						priority={true}
					/>
				</div>

				<div className="p-6">
					<h2 className="text-xl font-bold mb-4">Description</h2>
					<p className="text-gray-700">{map.description}</p>

					{/* We'll move the download button to a client component */}
					<DownloadButton imageUrl={map.imageUrl} fileName={map.name} />
				</div>
			</div>
		</div>
	);
}
