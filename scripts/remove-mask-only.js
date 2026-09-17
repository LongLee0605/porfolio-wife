const fs = require("fs");
const path = require("path");
const { removeBackground } = require("@imgly/background-removal-node");

const source = path.join(
  "public",
  "images",
  "d2dc672d-5166-40d9-8d14-ac8f7ad9a05b.jpg",
);
const out = path.join("public", "images", "_mask-temp.png");

async function run() {
  console.log("Removing background…");
  const blob = await removeBackground(source, {
    model: "medium",
    output: { format: "image/png", quality: 1 },
  });
  const buf = Buffer.from(await blob.arrayBuffer());
  await fs.promises.writeFile(out, buf);
  console.log("Wrote", out, `${(buf.length / 1024).toFixed(1)}KB`);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
