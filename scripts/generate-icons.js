const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const iconDir = path.join("public", "icons");
const appDir = path.join("src", "app");

/**
 * Brand mark: VT monogram (Trang Van) on burgundy.
 * Geometric serif-inspired letterforms — crisp at 16px.
 */
const markSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="VT">
  <defs>
    <linearGradient id="bg" x1="12" y1="4" x2="56" y2="60" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B4283A"/>
      <stop offset="1" stop-color="#7A1522"/>
    </linearGradient>
  </defs>
  <rect width="64" height="64" rx="14" fill="url(#bg)"/>
  <circle cx="52" cy="12" r="18" fill="#E8B7BF" fill-opacity="0.2"/>
  <!-- V -->
  <path fill="#FFFCFB" d="M11.5 17.25c0-.69.56-1.25 1.25-1.25h3.1c.52 0 .98.32 1.16.8L22.4 33.1l5.35-16.3a1.25 1.25 0 0 1 1.17-.8h3.05c.9 0 1.5.92 1.14 1.75L25.3 45.1a1.75 1.75 0 0 1-3.25 0L11.61 18.75a1.25 1.25 0 0 1-.11-1.5Z"/>
  <!-- T -->
  <path fill="#FFFCFB" d="M34.25 16c-.69 0-1.25.56-1.25 1.25v2.1c0 .69.56 1.25 1.25 1.25H40.5v23.15c0 .69.56 1.25 1.25 1.25h2.5c.69 0 1.25-.56 1.25-1.25V20.6h6.25c.69 0 1.25-.56 1.25-1.25v-2.1c0-.69-.56-1.25-1.25-1.25H34.25Z"/>
  <circle cx="48.5" cy="46.5" r="2.25" fill="#E8B7BF"/>
</svg>`;

async function raster(size, filePath) {
  await sharp(Buffer.from(markSvg))
    .resize(size, size, { fit: "fill" })
    .png({ compressionLevel: 9 })
    .toFile(filePath);
}

/** Maskable: same mark centered with safe-zone padding on solid brand color. */
async function rasterMaskable(size, filePath) {
  const padRatio = 0.14;
  const inner = Math.round(size * (1 - padRatio * 2));
  const pad = Math.round((size - inner) / 2);
  const innerBuf = await sharp(Buffer.from(markSvg))
    .resize(inner, inner)
    .png()
    .toBuffer();

  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 158, g: 29, b: 46, alpha: 1 },
    },
  })
    .composite([{ input: innerBuf, left: pad, top: pad }])
    .png({ compressionLevel: 9 })
    .toFile(filePath);
}

async function run() {
  fs.mkdirSync(iconDir, { recursive: true });

  // Remove leftover portrait-crop icons
  for (const stale of ["icon-32.png"]) {
    const p = path.join(iconDir, stale);
    if (fs.existsSync(p)) fs.unlinkSync(p);
  }

  fs.writeFileSync(path.join(iconDir, "mark.svg"), markSvg);
  fs.writeFileSync(path.join(appDir, "icon.svg"), markSvg);

  await raster(16, path.join(iconDir, "favicon-16.png"));
  await raster(32, path.join(iconDir, "favicon-32.png"));
  await raster(180, path.join(iconDir, "apple-touch-icon.png"));
  await raster(192, path.join(iconDir, "icon-192.png"));
  await raster(512, path.join(iconDir, "icon-512.png"));
  await rasterMaskable(512, path.join(iconDir, "icon-512-maskable.png"));

  await raster(32, path.join(appDir, "favicon.ico"));
  await raster(180, path.join(appDir, "apple-icon.png"));

  const report = [
    ...fs.readdirSync(iconDir).map((f) => path.join(iconDir, f)),
    path.join(appDir, "favicon.ico"),
    path.join(appDir, "icon.svg"),
    path.join(appDir, "apple-icon.png"),
  ];

  for (const file of report) {
    if (file.endsWith(".svg")) {
      console.log(`${path.relative(".", file)}: svg`);
      continue;
    }
    const meta = await sharp(file).metadata();
    const size = fs.statSync(file).size;
    console.log(
      `${path.relative(".", file)}: ${meta.width}x${meta.height} ${(size / 1024).toFixed(1)}KB`,
    );
  }
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
