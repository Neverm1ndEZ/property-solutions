import React from "react";
import ContactSidebar from "@/components/global/ContactSidebar";

export default function AboutPage() {
	return (
		<div className="container mx-auto px-4 py-8 flex flex-col md:flex-row">
			{/* Main content area - 70% */}
			<div className="w-full md:w-3/4 md:pr-6">
				<div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
					<div className="w-full h-24 bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
						<h1 className="text-3xl font-bold text-white">About Us</h1>
					</div>

					<div className="p-6">
						<h2 className="text-2xl font-bold mb-4">About Us</h2>

						<h3 className="text-lg font-bold mb-2">Location and Overview:</h3>
						<p className="mb-4">
							Welcome to Property Solutions, your trusted partner in real estate
							across Greater Noida and Yamuna. Specializing in the sale and
							purchase of residential and commercial properties, we pride
							ourselves on delivering exceptional service and expertise to meet
							all your real estate needs. Whether you&apos;re looking to buy
							your dream home or invest in commercial property, Property
							Solutions offers comprehensive solutions tailored to your goals.
							Our dedicated team is committed to providing you with reliable,
							transparent, and efficient services, ensuring a seamless and
							satisfying real estate experience. Discover the perfect property
							with Property Solutions today! 2009 Let&apos;s Turn Your Real
							Estate Dreams Into Reality.We provide you. ● Residential Plots●
							shops● Commercial plots● 6% Kisan kota Plots Sale ,Purchase
							Residential & commercial plot
						</p>

						<h3 className="text-lg font-bold mb-2">
							Products and Services offered:
						</h3>
						<p className="mb-4">
							Properties Solution in Greater has a wide range of products and
							services to cater to the varied requirements of their customers.
							The staff at this establishment are courteous and prompt at
							providing any assistance. They readily answer any queries or
							questions that you may have. Pay for the product or service with
							ease by using any of the available modes of payment, such as Cash,
							Master Card, Visa Card, Debit Cards, Money Orders, Cheques, or
							Credit Card. This establishment is functional from 09:30 - 20:30.
							Please scroll to the top for the address and contact details of
							Properties Solution at Greater Noida, Yamuna Expressway,
							Sikandrabad.
						</p>
					</div>
				</div>
			</div>

			{/* Sidebar - 30% */}
			<ContactSidebar />
		</div>
	);
}
