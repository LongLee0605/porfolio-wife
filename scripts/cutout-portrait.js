const { spawnSync } = require("child_process");
const path = require("path");

function run(script) {
  console.log("→", script);
  const result = spawnSync(process.execPath, [path.join(__dirname, script)], {
    stdio: "inherit",
  });
  if (result.status) process.exit(result.status);
}

// Separate processes: onnxruntime + sharp crash if loaded together on Windows
run("remove-mask-only.js");
run("apply-cutout-mask.js");
run("refine-portrait.js");
