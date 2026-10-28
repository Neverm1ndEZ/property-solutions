// Generates card-sized thumbnails next to each full-res map + a web-sized hero.
// Originals are left untouched so "Download" still serves full fidelity.
// Re-run with `pnpm img`; it skips anything already up to date.
import sharp from "sharp";
import { readdir, stat, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const MAPS = "public/maps";
const THUMBS = "public/thumbs";
const THUMB_WIDTH = 480;

async function thumb(src, dest) {
	if (existsSync(dest) && (await stat(dest)).mtimeMs > (await stat(src)).mtimeMs)
		return 0;
	await sharp(src)
		.resize({ width: THUMB_WIDTH, withoutEnlargement: true })
		.webp({ quality: 72, effort: 4 })
		.toFile(dest);
	return (await stat(dest)).size;
}

let made = 0;
let bytes = 0;
for (const area of await readdir(MAPS)) {
	await mkdir(path.join(THUMBS, area), { recursive: true });
	for (const file of await readdir(path.join(MAPS, area))) {
		const out = path.join(THUMBS, area, file.replace(/\.[^.]+$/, ".webp"));
		const size = await thumb(path.join(MAPS, area, file), out);
		if (size) {
			made++;
			bytes += size;
		}
	}
}

// Hero: 5.6MB PNG -> ~420KB webp at a sane width.
await sharp("public/site-assets/hero.png")
	.resize({ width: 1920 })
	.webp({ quality: 80, effort: 5 })
	.toFile("public/site-assets/hero-1920.webp");

// Social preview. Facebook/WhatsApp/X all want ~1200x630; handing them the
// 1920x1440 hero gets it re-cropped unpredictably or skipped.
await sharp("public/site-assets/hero.png")
	.resize({ width: 1200, height: 630, fit: "cover", position: "centre" })
	.jpeg({ quality: 82, mozjpeg: true })
	.toFile("public/site-assets/og.jpg");

console.log(
	`${made} thumbs (${(bytes / 1e6).toFixed(1)}MB) + hero-1920.webp + og.jpg`,
);
