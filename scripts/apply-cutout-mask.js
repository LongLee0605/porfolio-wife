const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const source = path.join(
  "public",
  "images",
  "d2dc672d-5166-40d9-8d14-ac8f7ad9a05b.jpg",
);
const maskPath = path.join("public", "images", "_mask-temp.png");
const outCutout = path.join("public", "images", "trang-cutout.png");
const outManual = path.join("public", "images", "trang-cutout-manual.png");
const outPreview = path.join("public", "images", "_preview-cutout.png");
const mist = { r: 214, g: 232, b: 240 };

function fillInteriorHoles(alpha, width, height, threshold = 128) {
  const n = width * height;
  const exterior = new Uint8Array(n);
  const queue = new Int32Array(n);
  let qh = 0;
  let qt = 0;
  const push = (i) => {
    if (exterior[i] || alpha[i] >= threshold) return;
    exterior[i] = 1;
    queue[qt++] = i;
  };
  for (let x = 0; x < width; x++) {
    push(x);
    push((height - 1) * width + x);
  }
  for (let y = 0; y < height; y++) {
    push(y * width);
    push(y * width + width - 1);
  }
  while (qh < qt) {
    const i = queue[qh++];
    const x = i % width;
    const y = (i / width) | 0;
    if (x > 0) push(i - 1);
    if (x < width - 1) push(i + 1);
    if (y > 0) push(i - width);
    if (y < height - 1) push(i + width);
  }
  let filled = 0;
  for (let i = 0; i < n; i++) {
    if (alpha[i] < threshold && !exterior[i]) {
      alpha[i] = 255;
      filled++;
    }
  }
  return filled;
}

function morphClose(alpha, width, height, radius = 3) {
  const n = width * height;
  const tmp = new Uint8Array(n);
  const out = new Uint8Array(n);
  const pass = (src, dst, mode) => {
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        let best = mode === "dilate" ? 0 : 255;
        for (let dy = -radius; dy <= radius; dy++) {
          const yy = y + dy;
          if (yy < 0 || yy >= height) continue;
          for (let dx = -radius; dx <= radius; dx++) {
            const xx = x + dx;
            if (xx < 0 || xx >= width) continue;
            const v = src[yy * width + xx];
            if (mode === "dilate") {
              if (v > best) best = v;
            } else if (v < best) best = v;
          }
        }
        dst[y * width + x] = best;
      }
    }
  };
  pass(alpha, tmp, "dilate");
  pass(tmp, out, "erode");
  alpha.set(out);
}

async function run() {
  console.log("1) Load…");
  const { width, height } = await sharp(source).rotate().metadata();
  const origBuf = await sharp(source).rotate().ensureAlpha().raw().toBuffer();
  const maskBuf = await sharp(maskPath)
    .ensureAlpha()
    .resize(width, height, { fit: "fill", kernel: sharp.kernel.lanczos3 })
    .raw()
    .toBuffer();

  const alpha = new Uint8Array(width * height);
  for (let i = 0; i < width * height; i++) alpha[i] = maskBuf[i * 4 + 3];

  console.log("2) Seal silhouette…");
  morphClose(alpha, width, height, 3);
  console.log(`   holes filled: ${fillInteriorHoles(alpha, width, height, 96)}`);

  console.log("3) Composite…");
  const out = Buffer.alloc(width * height * 4);

  for (let i = 0; i < width * height; i++) {
    const o = i * 4;
    let a = Math.max(alpha[i], maskBuf[o + 3]);
    if (a >= 230) a = 255;
    else if (a <= 10) a = 0;

    if (a === 0) {
      out[o] = out[o + 1] = out[o + 2] = out[o + 3] = 0;
      continue;
    }

    if (a === 255) {
      // Solid body — original pixels untouched
      out[o] = origBuf[o];
      out[o + 1] = origBuf[o + 1];
      out[o + 2] = origBuf[o + 2];
      out[o + 3] = 255;
      continue;
    }

    // Fringe: unpremultiply AI mask RGB to remove wood-wall bleed
    const ma = maskBuf[o + 3] / 255;
    let r;
    let g;
    let b;
    if (ma > 0.05) {
      r = Math.min(255, Math.round(maskBuf[o] / ma));
      g = Math.min(255, Math.round(maskBuf[o + 1] / ma));
      b = Math.min(255, Math.round(maskBuf[o + 2] / ma));
    } else {
      r = origBuf[o];
      g = origBuf[o + 1];
      b = origBuf[o + 2];
    }

    // If unpremultiply blew out toward wall color, pull toward local original
    // only when mask sample is near-black (failed decontam)
    const lum = 0.299 * r + 0.587 * g + 0.114 * b;
    const origLum =
      0.299 * origBuf[o] + 0.587 * origBuf[o + 1] + 0.114 * origBuf[o + 2];
    if (lum < 8 && origLum > 20) {
      r = origBuf[o];
      g = origBuf[o + 1];
      b = origBuf[o + 2];
    }

    out[o] = r;
    out[o + 1] = g;
    out[o + 2] = b;
    out[o + 3] = a;
  }

  await sharp(out, { raw: { width, height, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(outCutout);
  fs.copyFileSync(outCutout, outManual);

  await sharp(outCutout)
    .resize({ height: 1400, fit: "inside" })
    .flatten({ background: mist })
    .png()
    .toFile(outPreview);

  await sharp(outCutout)
    .resize({ height: 900, fit: "inside" })
    .flatten({ background: { r: 40, g: 40, b: 45 } })
    .png()
    .toFile(path.join("public", "images", "_preview-dark.png"));

  console.log(
    `Done ${outCutout} ${(fs.statSync(outCutout).size / 1024 / 1024).toFixed(2)}MB`,
  );
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
