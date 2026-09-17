const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

/**
 * Uses the original photo (arms fully intact).
 * Automated cutout keeps eating the crossed-arm silhouette against the wood wall.
 * Drop in a clean manual PNG as public/images/trang-cutout-manual.png later to replace.
 */
const source = path.join(
  "public",
  "images",
  "d2dc672d-5166-40d9-8d14-ac8f7ad9a05b.jpg",
);
const manual = path.join("public", "images", "trang-cutout-manual.png");
const outDir = path.join("public", "images");
const mist = { r: 214, g: 232, b: 240 };

async function run() {
  let base;
  if (fs.existsSync(manual)) {
    console.log("Using manual cutout:", manual);
    base = sharp(manual).ensureAlpha();
    const { width, height } = await base.metadata();
    const rgba = await sharp(manual).ensureAlpha().raw().toBuffer();
    const flat = Buffer.alloc(width * height * 3);
    const buf = await sharp(manual).ensureAlpha().raw().toBuffer();
    for (let i = 0; i < width * height; i++) {
      const a = buf[i * 4 + 3] / 255;
      flat[i * 3] = Math.round(buf[i * 4] * a + mist.r * (1 - a));
      flat[i * 3 + 1] = Math.round(buf[i * 4 + 1] * a + mist.g * (1 - a));
      flat[i * 3 + 2] = Math.round(buf[i * 4 + 2] * a + mist.b * (1 - a));
    }
    await sharp(flat, { raw: { width, height, channels: 3 } })
      .resize({ height: 1800, fit: "inside" })
      .png()
      .toFile(path.join(outDir, "trang-hero.png"));
  } else {
    console.log("No manual cutout — using original photo (arms intact)");
    const { width: w, height: h } = await sharp(source).rotate().metadata();
    const left = Math.floor(w * 0.47);
    const top = Math.floor(h * 0.22);
    await sharp(source)
      .rotate()
      .extract({ left, top, width: w - left, height: h - top })
      .resize({ height: 1800, fit: "inside" })
      .png()
      .toFile(path.join(outDir, "trang-hero.png"));
  }

  const hero = path.join(outDir, "trang-hero.png");
  const meta = await sharp(hero).metadata();
  console.log("Hero", meta.width, "x", meta.height);

  await sharp(hero)
    .webp({ quality: 90, effort: 6 })
    .toFile(path.join(outDir, "trang-hero.webp"));
  await sharp(hero)
    .jpeg({ quality: 92, mozjpeg: true })
    .toFile(path.join(outDir, "trang-hero.jpg"));
  await sharp(hero)
    .webp({ quality: 90, effort: 6 })
    .toFile(path.join(outDir, "trang-portrait-2x.webp"));
  await sharp(hero)
    .jpeg({ quality: 92, mozjpeg: true })
    .toFile(path.join(outDir, "trang-portrait-2x.jpg"));
  fs.copyFileSync(hero, path.join(outDir, "trang-portrait.png"));

  const person = await sharp(hero)
    .resize({ height: 560, fit: "inside" })
    .toBuffer();
  const pm = await sharp(person).metadata();
  const ogLeft = Math.max(0, Math.floor((1200 - (pm.width || 0)) / 2));
  const ogTop = Math.max(0, Math.floor((630 - (pm.height || 0)) / 2) + 20);
  await sharp({
    create: { width: 1200, height: 630, channels: 3, background: mist },
  })
    .composite([{ input: person, left: ogLeft, top: ogTop }])
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile(path.join(outDir, "og-portrait.jpg"));

  await sharp(hero)
    .resize({ height: 900, fit: "inside" })
    .png()
    .toFile(path.join(outDir, "_preview-hero.png"));

  for (const name of fs.readdirSync(outDir)) {
    if (name.startsWith("_") && name !== "_preview-hero.png") {
      try {
        fs.unlinkSync(path.join(outDir, name));
      } catch {
        /* ignore */
      }
    }
  }

  console.log("Done");
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
