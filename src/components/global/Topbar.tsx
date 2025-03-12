import React from "react";
import { Mail, Phone } from "lucide-react";

export default function Topbar() {
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
					<div className="flex flex-col sm:flex-row items-center w-full gap-2">
						<input
							type="text"
							placeholder="Request a Call back"
							className="w-full sm:w-auto rounded-lg bg-white p-2 text-sm placeholder:text-gray-600 text-gray-800"
						/>
						<button className="w-full sm:w-auto p-2 bg-green-600 rounded-lg font-semibold text-sm">
							OK
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
