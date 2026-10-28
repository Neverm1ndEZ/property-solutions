import { Clock, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { ADDRESS, EMAIL, HOURS, PHONE, PHONE_HREF, SITE_NAME } from "@/lib/site";

/**
 * Server component now — only the form itself is interactive, and the floating
 * WhatsApp/call buttons moved to the root layout so they render exactly once.
 */
export default function ContactSidebar() {
	return (
		<aside className="flex w-full flex-col gap-6 lg:sticky lg:top-36 lg:w-80 lg:shrink-0 lg:self-start xl:w-96">
			<section className="card-surface overflow-hidden">
				<h2 className="bg-brand-950 px-5 py-4 text-base font-bold text-white">
					Get in touch
				</h2>
				<ul className="space-y-4 p-5 text-sm">
					<li className="font-semibold text-brand-950">{SITE_NAME}</li>
					<li className="flex gap-3 text-brand-900/70">
						<MapPin aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-600" />
						<span>{ADDRESS}</span>
					</li>
					<li className="flex gap-3">
						<Phone aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-600" />
						<a
							href={PHONE_HREF}
							className="font-medium text-brand-700 hover:underline"
						>
							{PHONE}
						</a>
					</li>
					<li className="flex gap-3">
						<Mail aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-600" />
						<a
							href={`mailto:${EMAIL}`}
							className="break-all font-medium text-brand-700 hover:underline"
						>
							{EMAIL}
						</a>
					</li>
					<li className="flex gap-3 text-brand-900/70">
						<Clock aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-600" />
						<span>{HOURS}</span>
					</li>
				</ul>
			</section>

			<section className="card-surface overflow-hidden">
				<h2 className="bg-brand-950 px-5 py-4 text-base font-bold text-white">
					Send an enquiry
				</h2>
				<div className="p-5">
					<ContactForm />
				</div>
			</section>
		</aside>
	);
}
