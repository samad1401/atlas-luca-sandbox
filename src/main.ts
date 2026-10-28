export function add(a: number, b: number): number {
  return a + b;
}

export function slugify(input: string): string {
  return input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function handler(req: Request): Response {
  const url = new URL(req.url);
  if (req.method === "GET" && url.pathname === "/health") {
    return new Response(JSON.stringify({ ok: true }), {
      headers: { "content-type": "application/json" },
    });
  }
  if (req.method === "GET" && url.pathname === "/slug") {
    const s = url.searchParams.get("s") ?? "";
    return new Response(JSON.stringify({ slug: slugify(s) }), {
      headers: { "content-type": "application/json" },
    });
  }
  return new Response("not found", { status: 404 });
}

if (import.meta.main) {
  const port = Number(Deno.env.get("PORT") ?? "8000");
  Deno.serve({ port }, handler);
}
