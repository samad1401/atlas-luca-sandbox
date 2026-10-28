import { add, slugify } from "../../src/main.ts";
import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";

Deno.test("add positive numbers", () => {
  assertEquals(add(2, 3), 5);
});

Deno.test("add negative numbers", () => {
  assertEquals(add(-2, -3), -5);
});

Deno.test("add zero", () => {
  assertEquals(add(0, 7), 7);
});

Deno.test("slugify basic sentence", () => {
  assertEquals(slugify("Hello World"), "hello-world");
});

Deno.test("slugify with accents and punctuation", () => {
  assertEquals(slugify("Été à Paris !"), "ete-a-paris");
});

Deno.test("slugify collapses separators", () => {
  assertEquals(slugify("  --Foo   Bar--  "), "foo-bar");
});
