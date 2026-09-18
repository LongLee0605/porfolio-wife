const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const root = process.cwd();
const portraitPath = path.join(root, "public", "images", "portrait.png");
const iconDir = path.join(root, "public", "icons");
const imageDir = path.join(root, "public", "images");
const appDir = path.join(root, "src", "app");

const NAVY = { r: 0, g: 42, b: 86, alpha: 1 };

async function circularAvatar(size) {
  const diameter = size;
  const circleSvg = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${diameter}" height="${diameter}">
      <circle cx="${diameter / 2}" cy="${diameter / 2}" r="${diameter / 2}" fill="#fff"/>
    </svg>`,
  );

  const resized = await sharp(portraitPath)
    .resize(diameter, diameter, {
      fit: "cover",
      position: "centre",
    })
    .png()
    .toBuffer();

  return sharp(resized)
    .composite([{ input: circleSvg, blend: "dest-in" }])
    .png()
    .toBuffer();
}

async function iconOnNavy(size, padRatio = 0.08) {
  const inner = Math.round(size * (1 - padRatio * 2));
  const pad = Math.round((size - inner) / 2);
  const avatar = await circularAvatar(inner);

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: NAVY,
    },
  })
    .composite([{ input: avatar, left: pad, top: pad }])
    .png({ compressionLevel: 9 })
    .toBuffer();
}

async function maskableIcon(size) {
  const padRatio = 0.18;
  const inner = Math.round(size * (1 - padRatio * 2));
  const pad = Math.round((size - inner) / 2);
  const avatar = await circularAvatar(inner);

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: NAVY,
    },
  })
    .composite([{ input: avatar, left: pad, top: pad }])
    .png({ compressionLevel: 9 })
    .toBuffer();
}

async function writePng(buffer, filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  await sharp(buffer).png({ compressionLevel: 9 }).toFile(filePath);
}

async function run() {
  if (!fs.existsSync(portraitPath)) {
    throw new Error(`Missing portrait at ${portraitPath}`);
  }

  fs.mkdirSync(iconDir, { recursive: true });
  fs.mkdirSync(appDir, { recursive: true });

  for (const stale of ["mark.svg", "icon.svg"]) {
    for (const dir of [iconDir, appDir]) {
      const p = path.join(dir, stale);
      if (fs.existsSync(p)) fs.unlinkSync(p);
    }
  }
  const appIconSvg = path.join(appDir, "icon.svg");
  if (fs.existsSync(appIconSvg)) fs.unlinkSync(appIconSvg);

  const sizes = [
    [16, path.join(iconDir, "favicon-16.png")],
    [32, path.join(iconDir, "favicon-32.png")],
    [180, path.join(iconDir, "apple-touch-icon.png")],
    [192, path.join(iconDir, "icon-192.png")],
    [512, path.join(iconDir, "icon-512.png")],
  ];

  for (const [size, out] of sizes) {
    await writePng(await iconOnNavy(size), out);
  }

  await writePng(
    await maskableIcon(512),
    path.join(iconDir, "icon-512-maskable.png"),
  );

  await writePng(await iconOnNavy(32), path.join(appDir, "favicon.ico"));
  await writePng(await iconOnNavy(32), path.join(appDir, "icon.png"));
  await writePng(await iconOnNavy(180), path.join(appDir, "apple-icon.png"));

  await sharp(portraitPath)
    .resize(1200, 630, { fit: "cover", position: "centre" })
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(path.join(imageDir, "og.jpg"));

  console.log("Generated brand assets from portrait.png");
  console.log(" - public/icons/* (favicon, apple, PWA, maskable)");
  console.log(" - src/app/icon.png, apple-icon.png, favicon.ico");
  console.log(" - public/images/og.jpg");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
