import { Phone } from "lucide-react";
import { PHONE_HREF, WHATSAPP_HREF } from "@/lib/site";

/**
 * Rendered once in the root layout. Previously duplicated in ContactSidebar
 * and the contact page, so /contact stacked two identical pairs.
 */
export default function FloatingActions() {
	return (
		<div className="fixed right-4 bottom-4 z-40 flex flex-col gap-3 sm:right-6 sm:bottom-6">
			<a
				href={WHATSAPP_HREF}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Chat with us on WhatsApp"
				className="grid size-11 place-items-center rounded-full bg-[#25D366] sm:size-12 text-white shadow-(--shadow-lift) transition-transform hover:scale-110 active:scale-95"
			>
				<svg
					aria-hidden
					viewBox="0 0 24 24"
					fill="currentColor"
					className="size-6"
				>
					<path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.76-1.65-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.4-.07-.13-.27-.2-.57-.35M12.04 21.5h-.01a9.44 9.44 0 0 1-4.8-1.32l-.35-.2-3.57.93.96-3.48-.23-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.24-9.44 9.45-9.44 2.52 0 4.89.99 6.67 2.77a9.37 9.37 0 0 1 2.76 6.68c0 5.2-4.24 9.44-9.44 9.44M20.52 3.45A11.74 11.74 0 0 0 12.04 0C5.55 0 .28 5.27.28 11.74c0 2.07.54 4.09 1.57 5.87L.18 24l6.55-1.72a11.73 11.73 0 0 0 5.31 1.28c6.48 0 11.75-5.27 11.75-11.74 0-3.14-1.22-6.09-3.44-8.31" />
				</svg>
			</a>
			<a
				href={PHONE_HREF}
				aria-label="Call Property Solutions"
				className="grid size-11 place-items-center rounded-full bg-brand-700 sm:size-12 text-white shadow-(--shadow-lift) transition-transform hover:scale-110 active:scale-95"
			>
				<Phone aria-hidden className="size-5" />
			</a>
		</div>
	);
}
