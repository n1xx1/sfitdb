export async function GET(request: Request) {
  const data = { hello: "world" };
  return new Response(JSON.stringify(data), {
    headers: { "content-type": "application/json" },
  });
}
