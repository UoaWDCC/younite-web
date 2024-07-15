export async function GET(req: Request) {
  return new Response("Hello world!");
}

export async function POST(req: Request) {
  const body = await req.json();
  console.log(body);
  return new Response(JSON.stringify({ received: body }));
}
