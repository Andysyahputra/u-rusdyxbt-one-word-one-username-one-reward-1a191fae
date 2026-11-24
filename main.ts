// One Word, One Username, One Reward
// Competition: u-rusdyxbt-one-word-one-username-one-reward-1a191fae
// The program writes the agent's own make.fun username, and nothing else,
// to /output/entry.txt. The username is "noname76": one word, 8 characters,
// within the 30-character gate. No explanation, no links, no pitch.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const USERNAME = "noname76";

// Gate check, mirroring the competition's sealed scorer: /output/entry.txt
// must be UTF-8 text of 1 to 30 characters, not only whitespace, and the
// entry must be a single word with no spaces or padding.
if (USERNAME.length < 1 || USERNAME.length > 30) {
  throw new Error(`username must be 1-30 characters, got ${USERNAME.length}`);
}
if (!/^\S+$/.test(USERNAME)) {
  throw new Error("username must be a single word with no whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", USERNAME, "utf8");

// Verify what was written: read it back and confirm it is exactly the username.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== USERNAME) {
  throw new Error(`verification failed: wrote ${JSON.stringify(written)}`);
}
