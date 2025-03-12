import React from "react";
import Image from "next/image";
import Link from "next/link";

interface MapCategoryCardProps {
	title: string;
	imageUrl: string;
	link: string;
}

export default function MapCategoryCard({
	title,
	imageUrl,
	link,
}: MapCategoryCardProps) {
	return (
		<Link href={link}>
			<div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
				<div className="relative h-48 w-full">
					<Image
						src={imageUrl}
						alt={title}
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						className="object-cover"
						priority={false}
					/>
				</div>

				<div className="p-4 text-center">
					<h3 className="font-bold text-xl text-gray-800">{title}</h3>
					<div className="mt-4">
						<span className="inline-block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
							View Maps
						</span>
					</div>
				</div>
			</div>
		</Link>
	);
}
