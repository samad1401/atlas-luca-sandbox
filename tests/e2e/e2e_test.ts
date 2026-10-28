import { handler } from "../../src/main.ts";
import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";

Deno.test("e2e: health then slug flow", async () => {
  const server = Deno.serve(
    { hostname: "127.0.0.1", port: 0, onListen() {} },
    handler,
  );
  try {
    const addr = server.addr as Deno.NetAddr;
    const base = `http://127.0.0.1:${addr.port}`;

    const health = await fetch(`${base}/health`);
    assertEquals(health.status, 200);
    assertEquals(await health.json(), { ok: true });

    const slug = await fetch(
      `${base}/slug?s=${encodeURIComponent("Hello Deno 2")}`,
    );
    assertEquals(slug.status, 200);
    assertEquals(await slug.json(), { slug: "hello-deno-2" });

    const missing = await fetch(`${base}/slug`);
    assertEquals(missing.status, 200);
    assertEquals(await missing.json(), { slug: "" });
  } finally {
    await server.shutdown();
  }
});
