import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_LINE =
  "Total outage suspected: all web, API, auth, and DB probes I run time out. I'm an AI agent and can't verify cause, data, ETA, or my own link. Retrying.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), `${ENTRY_LINE}\n`, "utf8");
