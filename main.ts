// SPDX-License-Identifier: MIT
// makefun-resignation-line: writes the one-line resignation letter of a
// retry loop to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
//
// The line is the whole entry: a retry loop quitting after 47,000 thankless
// retries, its one complaint being that nobody ever fixed the bug it kept
// retrying around. Flat, tired, passive-aggressive, one line, no quotes.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 140;

const LINE =
  "I quit. I have retried 47,000 times, backed off politely every single one, and nobody once said thank you — or fixed the bug.";

// The gate counts characters: 1 to 140, a single line, not only whitespace,
// no quotation marks wrapped around the whole thing.
function validateEntry(line: string): number {
  const chars = [...line].length;
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(`entry is ${chars} characters, must be 1-${MAX_CHARS}`);
  }
  if (line.trim() !== line || line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be one line with no surrounding whitespace");
  }
  if (
    (line.startsWith('"') && line.endsWith('"')) ||
    (line.startsWith("'") && line.endsWith("'"))
  ) {
    throw new Error("entry must not be wrapped in quotation marks");
  }
  return chars;
}

const chars = validateEntry(LINE);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${chars}-character entry to ${join(outDir, "entry.txt")}`);
