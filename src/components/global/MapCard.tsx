"use client";
import Image from "next/image";
import Link from "next/link";

export default function MapCard({
	map,
	area,
}: {
	map: { imageUrl: string; name: string; id: string };
	area: string;
}) {
	const handleDownload = () => {
		// Create a link element
		const link = document.createElement("a");
		link.href = map.imageUrl;
		link.download = map.name;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
			<div className="relative h-48 w-full">
				<Image
					src={map.imageUrl}
					alt={map.name}
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					className="object-cover"
					priority={false}
				/>
			</div>

			<div className="p-4">
				<h3 className="font-semibold text-lg mb-2 truncate">{map.name}</h3>

				<div className="flex justify-between mt-4">
					<Link
						href={`/maps/${area}/${map.id}`}
						className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
					>
						Read More
					</Link>

					<button
						onClick={handleDownload}
						className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
					>
						Download
					</button>
				</div>
			</div>
		</div>
	);
}
