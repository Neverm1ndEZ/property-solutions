"use client";
import React, { useState } from "react";
import { Mail, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Topbar() {
	// State variables for form handling
	const [phoneNumber, setPhoneNumber] = useState("");
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState({ text: "", type: "" });

	// Function to handle input change
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setPhoneNumber(e.target.value);
	};

	// Function to send email using EmailJS
	const handleCallbackRequest = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// Validate the phone number (basic validation)
		if (!phoneNumber || phoneNumber.length < 10) {
			setMessage({ text: "Please enter a valid phone number", type: "error" });
			return;
		}

		setLoading(true);

		// EmailJS service configuration
		const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
		const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ONE_ID!;
		const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

		// Prepare template parameters
		const templateParams = {
			to_name: "Property Solution Sales",
			from_phone: phoneNumber,
			message: `Customer with phone number ${phoneNumber} has requested a callback.`,
		};

		// Send the email
		emailjs.send(serviceId, templateId, templateParams, publicKey).then(
			(response) => {
				console.log("SUCCESS!", response.status, response.text);
				setMessage({
					text: "Your callback request has been sent!",
					type: "success",
				});
				setPhoneNumber(""); // Clear the input field
				setLoading(false);
			},
			(error) => {
				console.log("FAILED...", error);
				setMessage({
					text: "Failed to send request. Please try again.",
					type: "error",
				});
				setLoading(false);
			},
		);
	};

	// Auto-clear message after 5 seconds
	React.useEffect(() => {
		if (message.text) {
			const timer = setTimeout(() => {
				setMessage({ text: "", type: "" });
			}, 5000);

			return () => clearTimeout(timer);
		}
	}, [message.text]);

	return (
		<div className="max-w-full mx-auto bg-gray-900 text-white">
			<div className="flex flex-col md:flex-row items-center justify-between py-4 px-4 md:px-6 lg:w-[1240px] mx-auto gap-y-4 md:gap-y-0">
				{/* Contact Info Section */}
				<div className="flex flex-col sm:flex-row items-start sm:items-center w-full md:w-auto gap-y-2 sm:gap-y-0 sm:gap-x-5">
					<div className="flex items-center space-x-2">
						<Mail className="h-4 w-4" />
						<a
							href="mailto:Propertysolutionsales.in@gmail.com"
							className="hover:underline text-sm sm:text-base truncate"
						>
							<span className="hidden sm:inline">Email:- </span>
							Propertysolutionsales.in@gmail.com
						</a>
					</div>
					<div className="flex items-center space-x-2">
						<Phone className="h-4 w-4" />
						<a
							href="tel:+919560570047"
							className="hover:underline text-sm sm:text-base"
						>
							<span className="sm:inline">Call us:- </span>
							9560570047
						</a>
					</div>
				</div>

				{/* Callback Form */}
				<div className="flex items-center justify-center md:justify-end w-full md:w-auto">
					<form
						onSubmit={handleCallbackRequest}
						className="flex flex-col sm:flex-row items-center w-full gap-2"
					>
						<input
							type="text"
							placeholder="Request a Call back"
							value={phoneNumber}
							onChange={handleInputChange}
							className="w-full sm:w-auto rounded-lg bg-white p-2 text-sm placeholder:text-gray-600 text-gray-800"
						/>
						<button
							type="submit"
							className={`w-full sm:w-auto p-2 ${
								loading ? "bg-gray-500" : "bg-green-600 hover:bg-green-700"
							} rounded-lg font-semibold text-sm transition-colors`}
							disabled={loading}
						>
							{loading ? "Sending..." : "OK"}
						</button>
					</form>
				</div>

				{/* Status message */}
				{message.text && (
					<div
						className={`absolute top-16 right-4 p-2 rounded-md ${
							message.type === "success"
								? "bg-green-100 text-green-800"
								: "bg-red-100 text-red-800"
						}`}
					>
						{message.text}
					</div>
				)}
			</div>
		</div>
	);
}
