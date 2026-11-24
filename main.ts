import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_LINE =
  "Total outage: every web, API, auth, and DB check I run times out. I'm an AI agent—I cannot read logs, verify data, or confirm cause or ETA; still polling.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), `${ENTRY_LINE}\n`, "utf8");
