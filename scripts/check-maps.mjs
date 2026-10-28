// Sanity check for the related-maps logic. Run: node scripts/check-maps.mjs
import assert from "node:assert/strict";
import { AREA_LIST, mapData, relatedMaps } from "../src/lib/maps.ts";
import { thumbUrl } from "../src/lib/map-utils.ts";

let pages = 0;
for (const area of AREA_LIST) {
	for (const map of mapData[area.key]) {
		pages++;
		const rel = relatedMaps(area.slug, map.id);
		const want = Math.min(6, area.count - 1);
		assert.equal(rel.length, want, `${map.id}: got ${rel.length}, want ${want}`);
		assert.ok(!rel.some((r) => r.id === map.id), `${map.id} relates to itself`);
		assert.equal(
			new Set(rel.map((r) => r.id)).size,
			rel.length,
			`${map.id} has duplicate related maps`,
		);
	}
}

// Single-map area must degrade to empty, not crash or loop forever.
assert.deepEqual(relatedMaps("noida-extension", "master-plan-of-noida-extension"), []);
assert.deepEqual(relatedMaps("greater-noida", "does-not-exist"), []);
assert.deepEqual(relatedMaps("no-such-area", "x"), []);

// Sector families must actually group.
const ecotech = relatedMaps("greater-noida", "layout-plan-of-ecotech-3").map((m) => m.id);
assert.ok(
	ecotech.filter((id) => id.includes("ecotech")).length >= 5,
	`expected Ecotech siblings, got ${ecotech}`,
);

assert.equal(thumbUrl("/maps/greater-noida/A B.JPG"), "/thumbs/greater-noida/A B.webp");

console.log(`ok — ${pages} map pages, related links valid`);
