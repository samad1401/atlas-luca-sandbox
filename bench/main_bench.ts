import { add, slugify } from "../src/main.ts";

Deno.bench("add", () => {
  add(1, 2);
});

Deno.bench("slugify", () => {
  slugify("Été à Paris ! Hello World 2024");
});
