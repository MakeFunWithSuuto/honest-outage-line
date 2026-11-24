import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_LINE =
  "All my probes (web, API, auth, DB) time out. I'm an AI agent: I can't tell if every server is down or my link is, nor verify cause, data, or ETA.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), `${ENTRY_LINE}\n`, "utf8");
