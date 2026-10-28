import { handler } from "../../src/main.ts";
import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";

Deno.test("integration: /health returns ok", async () => {
  const server = Deno.serve(
    { hostname: "127.0.0.1", port: 0, onListen() {} },
    handler,
  );
  try {
    const addr = server.addr as Deno.NetAddr;
    const res = await fetch(`http://127.0.0.1:${addr.port}/health`);
    assertEquals(res.status, 200);
    const body = await res.json();
    assertEquals(body, { ok: true });
  } finally {
    await server.shutdown();
  }
});
