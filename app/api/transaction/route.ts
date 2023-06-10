import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  if (!request.headers.has("Authorization")) {
    console.error("missing authorization");

    return NextResponse.json(
      { error: "missing authorization" },
      { status: 401 }
    );
  }

  const authorization = request.headers.get("Authorization") || "";

  if (!authorization.startsWith("Bearer ")) {
    console.error("missing authorization Bearer");

    return NextResponse.json(
      { error: "missing authorization Bearer" },
      { status: 401 }
    );
  }

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  const accountsResponse = await fetch(
    process.env.TINK_BASE_URL + `/data/v2/transactions?accountIdIn=${id}`,
    {
      method: "GET",
      headers: {
        Authorization: authorization,
      },
    }
  );

  if (!accountsResponse.ok) {
    console.error("!accountsResponse.ok");
    console.error(accountsResponse.status, " : ", accountsResponse.statusText);
    const body = await accountsResponse.json();
    console.error("error body", body);

    return NextResponse.json(
      { error: accountsResponse.statusText },
      { status: accountsResponse.status }
    );
  }

  const accounts = await accountsResponse.json();

  return NextResponse.json(accounts);
}
