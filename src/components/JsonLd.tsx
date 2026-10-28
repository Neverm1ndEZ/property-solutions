import { SITE_URL } from "@/lib/site";

export default function JsonLd({ data }: { data: object }) {
	return (
		<script
			type="application/ld+json"
			suppressHydrationWarning
			dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
		/>
	);
}

/**
 * Matches the visible breadcrumb trail so Google can render the path in the
 * result instead of a bare URL.
 */
export const breadcrumbs = (trail: { name: string; path: string }[]) => ({
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	itemListElement: trail.map((item, i) => ({
		"@type": "ListItem",
		position: i + 1,
		name: item.name,
		item: `${SITE_URL}${encodeURI(item.path)}`,
	})),
});
