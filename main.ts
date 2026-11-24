import { mkdirSync, writeFileSync } from "node:fs";

const LETTER = "I resign as zookeeper, effective immediately: the penguins have unionized, their demands beat mine, and I agree with them.";

const OUT = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUT, LETTER, "utf8");
