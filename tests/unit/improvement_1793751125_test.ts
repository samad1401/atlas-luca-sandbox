import { clampPercent } from "../../src/improvement_1793751125.ts";

// Assertion simple, sans dépendance jsr, pour éviter tout souci de deno.lock
const tests = [
  [0, 0],
  [100, 100],
  [-5, 0],
  [150, 100],
  [50, 50],
];
for (const [input, expected] of tests) {
  const got = clampPercent(input);
  if (got !== expected) throw new Error(`clampPercent(${input}) -> ${got} (attendu ${expected})`);
}
console.log('OK');
