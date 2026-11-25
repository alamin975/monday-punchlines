// Monday Morning Punchlines — one joke about Monday mornings.
// The joke turns on Monday itself calling in, with coffee as the negotiator.
import * as fs from "node:fs";

const entry = "Monday called. It wants its snooze button back, and it is bringing coffee as a hostage negotiator.";

// Write the single joke line exactly as typed, UTF-8, no trailing newline.
function writeEntry(text: string): void {
  fs.mkdirSync("/output", { recursive: true });
  fs.writeFileSync("/output/entry.txt", text, { encoding: "utf8" });
}

writeEntry(entry);
