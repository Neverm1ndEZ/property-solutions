import React from "react";
import { Mail, Phone } from "lucide-react";

export default function Topbar() {
	return (
		<div className="max-w-full mx-auto bg-gray-900 text-white">
			<div className="flex items-center justify-between py-4 w-[1240px] mx-auto">
				<div className="flex items-center w-full gap-x-5">
					<div className="flex items-center space-x-4">
						<Mail className="" />
						<a
							href="mailto:Propertysolutionsales.in@gmail.com"
							className="hover:underline"
						>
							Email:- Propertysolutionsales.in@gmail.com
						</a>
					</div>
					<div className="flex items-center space-x-4">
						<Phone className="" />
						<a href="tel:+919560570047" className="hover:underline">
							Call us:- 9560570047
						</a>
					</div>
				</div>
				<div className="flex items-center justify-end space-x-4 w-full">
					<input
						type="text"
						placeholder="Enter your Number (Request a Call back)"
						className="w-3/5 rounded-lg bg-white p-2 placeholder:text-gray-600"
					/>
					<button className="p-2.5 bg-green-600 rounded-lg font-semibold">
						OK
					</button>
				</div>
			</div>
		</div>
	);
}
