import React from "react";

export default function ContactPage() {
	return (
		<div className="container mx-auto px-4 py-8">
			<div className="w-full h-24 bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center mb-8">
				<h1 className="text-3xl font-bold text-white">Contact Us</h1>
			</div>

			<div className="flex flex-col md:flex-row gap-6">
				{/* Contact Info */}
				<div className="w-full md:w-1/3">
					<div className="bg-black text-white p-4">
						<h2 className="text-xl font-bold">Contact Info</h2>
					</div>

					<div className="bg-black text-white p-4">
						<p className="font-medium">Property Solutions</p>

						<p className="mt-4">
							Tradex tower 2,alpha 1 commercial belt,
							<br />
							Greater Noida,Uttar Pradesh, India
						</p>

						<p className="mt-4">
							<span className="font-medium">Ph : </span>
							<a href="tel:+919560570047" className="hover:underline">
								+919560570047
							</a>
						</p>

						<p className="mt-2">
							<span className="font-medium">E-mail: </span>
							<a
								href="mailto:Propertysolutionsales.in@gmail.com"
								className="hover:underline"
							>
								Propertysolutionsales.in@gmail.com
							</a>
						</p>

						{/* Social icons */}
						<div className="flex mt-6 space-x-4">
							<div className="w-8 h-8 flex items-center justify-center border border-gray-500 rounded">
								<span>🌐</span>
							</div>
							<div className="w-8 h-8 flex items-center justify-center border border-gray-500 rounded">
								<span>🌐</span>
							</div>
							<div className="w-8 h-8 flex items-center justify-center border border-gray-500 rounded">
								<span>📞</span>
							</div>
						</div>
					</div>
				</div>

				{/* Send Message Form */}
				<div className="w-full md:w-2/3">
					<h2 className="text-xl font-bold mb-4">Send a Message</h2>

					<form>
						<textarea
							className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
							rows={7}
							placeholder="Write your message"
						></textarea>

						<button
							type="submit"
							className="mt-4 py-2 px-6 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
						>
							SEND
						</button>
					</form>
				</div>
			</div>

			{/* Map Section */}
			<div className="mt-8 w-full h-[400px] relative">
				<div className="absolute inset-0 bg-gray-200">
					{/* This would be replaced with an actual map component in production */}
					<div className="w-full h-full flex items-center justify-center text-gray-500">
						<p>
							Google Map showing Property Solutions location in Greater Noida
						</p>
					</div>
				</div>
			</div>

			{/* Social Media and Call buttons */}
			<div className="fixed right-6 bottom-6 flex flex-col space-y-4 z-40">
				<a
					href="https://wa.me/919560570047"
					target="_blank"
					rel="noopener noreferrer"
					className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
				>
					{/* WhatsApp SVG */}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
					</svg>
				</a>
				<a
					href="tel:+919560570047"
					className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
				>
					{/* Phone SVG */}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
					</svg>
				</a>
			</div>
		</div>
	);
}
