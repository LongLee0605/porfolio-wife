const { spawnSync } = require("child_process");
const path = require("path");

const result = spawnSync(
  process.execPath,
  [path.join(__dirname, "refine-portrait.js")],
  { stdio: "inherit" },
);
process.exit(result.status || 0);
