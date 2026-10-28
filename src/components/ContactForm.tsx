"use client";
import { useActionState } from "react";
import emailjs from "@emailjs/browser";
import { Loader2, Send } from "lucide-react";
import { EMAIL } from "@/lib/site";

type State = { ok: boolean; text: string } | null;

const field =
	"w-full rounded-xl border border-sand-200 bg-sand-50 px-4 py-3 text-sm text-brand-950 transition-[border-color,box-shadow] outline-none placeholder:text-brand-900/40 focus:border-brand-400 focus:bg-white focus:shadow-(--shadow-soft)";

/**
 * Single contact form shared by the sidebar and the contact page — previously
 * two copies, one of which (the contact page) had no submit handler at all.
 */
export default function ContactForm({ rows = 5 }: { rows?: number }) {
	const [state, submit, pending] = useActionState<State, FormData>(
		async (_prev, formData) => {
			const get = (k: string) => String(formData.get(k) ?? "").trim();
			const message = get("message");
			const email = get("email");

			if (!message) return { ok: false, text: "Please write a message first." };
			if (email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
				return { ok: false, text: "That email address looks wrong." };
			}

			try {
				await emailjs.send(
					process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
					process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_TWO_ID!,
					{
						to_name: "Property Solutions",
						to_email: EMAIL,
						name: get("name") || "Website visitor",
						email: email || "(not provided)",
						phone: get("phone") || "(not provided)",
						message,
					},
					process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
				);
				return { ok: true, text: "Message sent — we will be in touch soon." };
			} catch {
				return {
					ok: false,
					text: "Could not send. Please call or email us directly.",
				};
			}
		},
		null,
	);

	return (
		<form action={submit} className="flex flex-col gap-3">
			<input
				name="name"
				autoComplete="name"
				placeholder="Your name"
				aria-label="Your name"
				className={field}
			/>
			<div className="grid gap-3 sm:grid-cols-2">
				<input
					name="email"
					type="email"
					autoComplete="email"
					placeholder="Your email"
					aria-label="Your email"
					className={field}
				/>
				<input
					name="phone"
					type="tel"
					inputMode="tel"
					autoComplete="tel"
					placeholder="Your phone"
					aria-label="Your phone"
					className={field}
				/>
			</div>
			<textarea
				name="message"
				rows={rows}
				required
				placeholder="What are you looking for? Plot size, sector, budget…"
				aria-label="Your message"
				className={`${field} resize-y`}
			/>

			<button
				type="submit"
				disabled={pending}
				className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-700 px-5 py-3 text-sm font-semibold text-white transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-brand-800 disabled:translate-y-0 disabled:opacity-60"
			>
				{pending ? (
					<Loader2 aria-hidden className="size-4 animate-spin" />
				) : (
					<Send aria-hidden className="size-4" />
				)}
				{pending ? "Sending…" : "Send message"}
			</button>

			{state && (
				<p
					role="status"
					className={`rounded-xl px-4 py-3 text-sm font-medium ${
						state.ok
							? "bg-brand-50 text-brand-800 ring-1 ring-brand-200"
							: "bg-red-50 text-red-800 ring-1 ring-red-200"
					}`}
				>
					{state.text}
				</p>
			)}
		</form>
	);
}
