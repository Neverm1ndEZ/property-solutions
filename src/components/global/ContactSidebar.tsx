"use client";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSidebar() {
	// State variables for form handling
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);
	const [statusMessage, setStatusMessage] = useState({ text: "", type: "" });
	const formRef = useRef(null);

	// Handle input changes
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	// Handle form submission with EmailJS
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// Basic validation
		if (!formData.message.trim()) {
			setStatusMessage({
				text: "Please write a message before sending",
				type: "error",
			});
			return;
		}

		setLoading(true);

		// EmailJS configuration
		// Replace these with your actual EmailJS credentials
		const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
		const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_TWO_ID!;
		const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

		// Send email using EmailJS
		emailjs.sendForm(serviceId, templateId, formRef.current!, publicKey).then(
			(result) => {
				console.log("Email sent successfully!", result.text);
				setStatusMessage({
					text: "Your message has been sent successfully! We'll get back to you soon.",
					type: "success",
				});
				// Reset form after successful submission
				setFormData({
					name: "",
					email: "",
					phone: "",
					message: "",
				});
				setLoading(false);
			},
			(error) => {
				console.error("Failed to send email:", error.text);
				setStatusMessage({
					text: "Failed to send your message. Please try again or contact us directly.",
					type: "error",
				});
				setLoading(false);
			},
		);
	};

	// Clear status message after 5 seconds
	React.useEffect(() => {
		if (statusMessage.text) {
			const timer = setTimeout(() => {
				setStatusMessage({ text: "", type: "" });
			}, 5000);

			return () => clearTimeout(timer);
		}
	}, [statusMessage.text]);

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
							className="text-green-600 hover:underline"
						>
							+919560570047
						</a>
					</p>
					<p className="text-sm mt-2">
						<span className="font-medium">E-mail: </span>
						<a
							href="mailto:Propertysolutionsales.in@gmail.com"
							className="text-green-600 hover:underline"
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
					<form ref={formRef} onSubmit={handleSubmit}>
						{/* Hidden fields that will be sent with the form but not shown to user */}
						<input type="hidden" name="to_name" value="Property Solutions" />
						<input
							type="hidden"
							name="to_email"
							value="Propertysolutionsales.in@gmail.com"
						/>

						{/* Name field */}
						<div className="mb-3">
							<input
								type="text"
								name="name"
								placeholder="Your Name"
								value={formData.name}
								onChange={handleChange}
								className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
							/>
						</div>

						{/* Email field */}
						<div className="mb-3">
							<input
								type="email"
								name="email"
								placeholder="Your Email"
								value={formData.email}
								onChange={handleChange}
								className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
							/>
						</div>

						{/* Phone field */}
						<div className="mb-3">
							<input
								type="tel"
								name="phone"
								placeholder="Your Phone"
								value={formData.phone}
								onChange={handleChange}
								className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
							/>
						</div>

						{/* Message field */}
						<textarea
							name="message"
							className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
							rows={5}
							placeholder="Write your message"
							value={formData.message}
							onChange={handleChange}
						></textarea>

						{/* Submit button */}
						<button
							type="submit"
							disabled={loading}
							className={`w-full mt-4 py-2 px-4 ${
								loading ? "bg-gray-500" : "bg-green-600 hover:bg-green-700"
							} text-white rounded-lg transition-colors`}
						>
							{loading ? "SENDING..." : "SEND"}
						</button>

						{/* Status message */}
						{statusMessage.text && (
							<div
								className={`mt-3 p-2 rounded-md ${
									statusMessage.type === "success"
										? "bg-green-100 text-green-800 border border-green-200"
										: "bg-red-100 text-red-800 border border-red-200"
								}`}
							>
								{statusMessage.text}
							</div>
						)}
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
						<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
					</svg>
				</a>
			</div>
		</div>
	);
}
