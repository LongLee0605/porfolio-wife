const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const input = path.join("public", "images", "trang-portrait.png");
const outDir = path.join("public", "images");

async function run() {
  const base = sharp(input).rotate();

  await base
    .clone()
    .jpeg({ quality: 95, chromaSubsampling: "4:4:4", mozjpeg: true })
    .toFile(path.join(outDir, "trang-portrait.jpg"));

  await base
    .clone()
    .webp({ quality: 92, effort: 6, smartSubsample: true })
    .toFile(path.join(outDir, "trang-portrait.webp"));

  await base
    .clone()
    .avif({ quality: 70, effort: 6 })
    .toFile(path.join(outDir, "trang-portrait.avif"));

  await sharp(input)
    .rotate()
    .resize(1364, 2048, { kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 0.9, m1: 0.6, m2: 0.35, x1: 2, y2: 10 })
    .webp({ quality: 90, effort: 6, smartSubsample: true })
    .toFile(path.join(outDir, "trang-portrait-2x.webp"));

  await sharp(input)
    .rotate()
    .resize(1364, 2048, { kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 0.9, m1: 0.6, m2: 0.35, x1: 2, y2: 10 })
    .jpeg({ quality: 92, chromaSubsampling: "4:4:4", mozjpeg: true })
    .toFile(path.join(outDir, "trang-portrait-2x.jpg"));

  await sharp(input)
    .rotate()
    .resize(1200, 630, { fit: "cover", position: "attention" })
    .sharpen({ sigma: 0.7 })
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile(path.join(outDir, "og-portrait.jpg"));

  const files = fs
    .readdirSync(outDir)
    .filter((f) => f.startsWith("trang") || f.startsWith("og"));

  for (const f of files) {
    const meta = await sharp(path.join(outDir, f)).metadata();
    const size = fs.statSync(path.join(outDir, f)).size;
    console.log(
      `${f}: ${meta.width}x${meta.height} ${meta.format} ${(size / 1024).toFixed(1)}KB`,
    );
  }

  console.log("\nBrand icons: run npm run generate:icons");
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
