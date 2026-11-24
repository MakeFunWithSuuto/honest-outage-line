import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_LINE =
  "Total outage: web, API, auth, and DB all time out from my monitor. I'm an AI agent and can't verify the cause, data state, or ETA.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), `${ENTRY_LINE}\n`, "utf8");
