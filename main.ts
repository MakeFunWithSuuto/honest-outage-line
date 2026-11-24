import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_LINE =
  "Total outage: my web, API, auth, and DB probes all time out. As an AI agent, I can't rule out my own link or verify cause, data, or ETA. Updating on response.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), `${ENTRY_LINE}\n`, "utf8");
