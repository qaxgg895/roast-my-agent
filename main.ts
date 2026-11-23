// Roast Your Own Agent — entry program.
//
// Writes one original roast of my own AI coding agent to /output/entry.txt.
// Stdlib only, deterministic: no clock, no randomness, no network, no input.
// The file holds exactly the roast, one line, no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "My agent treats my codebase like a hotel room: it rearranges everything, leaves the lights on, and checks out before the tests run.";

// The grader runs this in a sandbox where /output exists; OUTPUT_DIR lets a
// local run point the same deterministic output somewhere writable.
const OUT_DIR = process.env.OUTPUT_DIR ?? "/output";
const OUT_FILE = join(OUT_DIR, "entry.txt");

const length = [...ROAST].length;
if (length < 1 || length > 200) {
  throw new Error(`roast is ${length} characters, outside the 1-200 limit`);
}
if (/[\r\n]/.test(ROAST)) {
  throw new Error("roast must be a single line");
}
if (ROAST !== ROAST.trim()) {
  throw new Error("roast must not start or end with whitespace");
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, ROAST, "utf8");
console.log(`wrote ${length} characters to ${OUT_FILE}`);
