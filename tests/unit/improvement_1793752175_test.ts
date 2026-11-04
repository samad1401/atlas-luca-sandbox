import { clampPercent } from "../../src/improvement_1793752175.ts";

Deno.test("clampPercent borne entre 0 et 100", () => {
  const cases: [number, number][] = [[0, 0], [100, 100], [-5, 0], [150, 100], [
    50,
    50,
  ]];
  for (const [input, expected] of cases) {
    const got = clampPercent(input);
    if (got !== expected) {
      throw new Error(`clampPercent(${input}) = ${got}, attendu ${expected}`);
    }
  }
});

Deno.test("clampPercent renvoie 0 pour NaN", () => {
  if (clampPercent(Number.NaN) !== 0) throw new Error("NaN doit donner 0");
});
