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
		<div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200">
			<div className="p-2 bg-gray-800 text-white text-center">
				<h3 className="font-semibold text-sm uppercase truncate">{map.name}</h3>
			</div>

			<div className="relative h-52 w-full p-2 bg-white">
				<div className="border border-red-500 h-full w-full relative">
					<Image
						src={map.imageUrl}
						alt={map.name}
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						className="object-contain"
						priority={false}
					/>
				</div>
			</div>

			<div className="flex justify-between p-2 text-sm">
				<Link
					href={`/maps/${area}/${map.id}`}
					className="text-blue-600 hover:underline font-medium"
				>
					READ MORE
				</Link>

				<button
					onClick={handleDownload}
					className="text-blue-600 hover:underline font-medium"
				>
					DOWNLOAD
				</button>
			</div>
		</div>
	);
}
