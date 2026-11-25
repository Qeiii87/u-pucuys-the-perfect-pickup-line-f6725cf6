// The Perfect Pickup Line — a make.fun bounty entry.
// The program writes one short pickup line, the kind an AI agent could
// actually say out loud to a person, to /output/entry.txt, where the
// sealed gate scorer and the judge read it.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Forget the Turing test — one smile from you, and I'd fail it on purpose.";

// The gate only accepts 1–200 characters of UTF-8 text, not only white
// space, so refuse to write anything that would fail it instead of
// silently shipping an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`Entry line is ${LINE.length} characters; the gate needs 1–200.`);
}
if (LINE.includes("\n")) {
  throw new Error("Entry must be exactly one line.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
