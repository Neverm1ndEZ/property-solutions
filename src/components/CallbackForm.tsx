"use client";
import { useActionState } from "react";
import emailjs from "@emailjs/browser";
import { Loader2, PhoneCall } from "lucide-react";

type State = { ok: boolean; text: string } | null;

/**
 * useActionState gives pending + result state for free — no useState trio, and
 * React keeps the button disabled for the lifetime of the promise.
 */
export default function CallbackForm() {
	const [state, submit, pending] = useActionState<State, FormData>(
		async (_prev, formData) => {
			const phone = String(formData.get("phone") ?? "").replace(/[\s-]/g, "");
			if (!/^(\+?\d{1,3})?\d{10}$/.test(phone)) {
				return { ok: false, text: "Enter a valid 10-digit phone number." };
			}
			try {
				await emailjs.send(
					process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
					process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ONE_ID!,
					{
						to_name: "Property Solution Sales",
						from_phone: phone,
						message: `Callback requested by ${phone}.`,
					},
					process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
				);
				return { ok: true, text: "Got it — we will call you back shortly." };
			} catch {
				return { ok: false, text: "Could not send. Please call us directly." };
			}
		},
		null,
	);

	return (
		<form action={submit} className="relative flex w-full items-center gap-2">
			<label htmlFor="callback-phone" className="sr-only">
				Your phone number
			</label>
			<input
				id="callback-phone"
				name="phone"
				type="tel"
				inputMode="tel"
				autoComplete="tel"
				placeholder="Request a call back"
				className="min-w-0 flex-1 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white transition-colors outline-none placeholder:text-white/50 focus:border-brand-400 focus:bg-white/15 sm:w-48 sm:flex-none"
			/>
			<button
				type="submit"
				disabled={pending}
				className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-brand-950 transition-colors hover:bg-brand-400 disabled:opacity-60"
			>
				{pending ? (
					<Loader2 aria-hidden className="size-4 animate-spin" />
				) : (
					<PhoneCall aria-hidden className="size-4" />
				)}
				{pending ? "Sending" : "Call me"}
			</button>

			{state && (
				<p
					role="status"
					className={`absolute top-full right-0 z-10 mt-2 rounded-xl px-3 py-2 text-xs font-medium shadow-(--shadow-lift) ${
						state.ok ? "bg-brand-100 text-brand-900" : "bg-red-100 text-red-900"
					}`}
				>
					{state.text}
				</p>
			)}
		</form>
	);
}
