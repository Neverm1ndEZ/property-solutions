import React from "react";
import MapCategoryCard from "@/components/global/MapCategoryCard";
import RandomMapsSection from "@/components/global/RandomMapsSection";
import ContactSidebar from "@/components/global/ContactSidebar";
import Hero from "@/components/home/Hero";

export default function Home() {
	return (
		<div className="relative">
			<Hero />

			<div className="container mx-auto px-4 py-8 flex flex-col md:flex-row">
				{/* Main content area - 70% */}
				<div className="w-full md:w-3/4 md:pr-6">
					{/* Map Categories Section */}
					<div className="mb-12">
						<h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-gray-200 pb-2">
							Property Areas
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							<MapCategoryCard
								title="Greater Noida"
								imageUrl="/maps/greater-noida/ABADI AT JUNPAT.JPG"
								link="/maps/greater-noida"
							/>
							<MapCategoryCard
								title="Yamuna Expressway"
								imageUrl="/maps/yamuna-expressway/ABADI AT KHERPUR.jpg"
								link="/maps/yamuna-expressway"
							/>
							<MapCategoryCard
								title="Noida Extension"
								imageUrl="/maps/noida-extension/MASTER PLAN OF NOIDA EXTENSION.JPG"
								link="/maps/noida-extension"
							/>
						</div>
					</div>

					{/* Random Maps Section */}
					<RandomMapsSection />
				</div>

				{/* Sidebar - 30% */}
				<ContactSidebar />
			</div>
		</div>
	);
}
