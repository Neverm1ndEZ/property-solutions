export const SITE_NAME = "Property Solutions";

/**
 * Canonical origin, no trailing slash. Canonicals, the sitemap, robots.txt and
 * OG image URLs all derive from this — if it is wrong, search engines index the
 * wrong host. Vercel supplies VERCEL_PROJECT_PRODUCTION_URL automatically on
 * production builds; set NEXT_PUBLIC_SITE_URL to override (e.g. a custom
 * domain, or any other host).
 */
export const SITE_URL = (
	process.env.NEXT_PUBLIC_SITE_URL ||
	(process.env.VERCEL_PROJECT_PRODUCTION_URL
		? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
		: "http://localhost:3000")
).replace(/\/$/, "");
export const PHONE = "+91 95605 70047";
export const PHONE_HREF = "tel:+919560570047";
export const WHATSAPP_HREF = "https://wa.me/919560570047";
export const EMAIL = "Propertysolutionsales.in@gmail.com";
export const ADDRESS =
	"Tradex Tower 2, Alpha 1 Commercial Belt, Greater Noida, Uttar Pradesh 201308";
export const HOURS = "Mon – Sun, 9:30 AM – 8:30 PM";
