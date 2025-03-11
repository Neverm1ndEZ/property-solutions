"use client";
import React, { useState } from "react";

export default function ContactSidebar() {
	const [message, setMessage] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Here you would handle the form submission
		alert("Message submitted: " + message);
		setMessage("");
	};

	return (
		<div className="w-full md:w-1/4 mt-8 md:mt-0">
			{/* Contact Us Information */}
			<div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
				<div className="bg-gray-900 text-white p-4">
					<h3 className="text-xl font-bold">Contact Us</h3>
				</div>
				<div className="p-4">
					<p className="font-medium">Property Solutions</p>
					<p className="text-sm mt-2">
						Tradex tower 2,alpha 1 commercial belt, Greater Noida,Uttar Pradesh,
						India 201308
					</p>
					<p className="text-sm mt-4">
						<span className="font-medium">Ph : </span>
						<a
							href="tel:+919560570047"
							className="text-blue-600 hover:underline"
						>
							+919560570047
						</a>
					</p>
					<p className="text-sm mt-2">
						<span className="font-medium">E-mail: </span>
						<a
							href="mailto:Propertysolutionsales.in@gmail.com"
							className="text-blue-600 hover:underline"
						>
							Propertysolutionsales.in@gmail.com
						</a>
					</p>
				</div>
			</div>

			{/* Contact Form */}
			<div className="bg-white rounded-lg shadow-md overflow-hidden">
				<div className="bg-gray-900 text-white p-4">
					<h3 className="text-xl font-bold">Contact Form</h3>
				</div>
				<div className="p-4">
					<form onSubmit={handleSubmit}>
						<textarea
							className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							rows={5}
							placeholder="Write your message"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						></textarea>
						<button
							type="submit"
							className="w-full mt-4 py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
						>
							SEND
						</button>
					</form>
				</div>
			</div>

			{/* Social Media and WhatsApp */}
			<div className="fixed right-6 bottom-6 flex flex-col space-y-4 z-40">
				<a
					href="https://wa.me/919560570047"
					target="_blank"
					rel="noopener noreferrer"
					className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
				>
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
