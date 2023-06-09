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

  // splits on " " and takes the token eg. Bearer <JWT Token> returns <JWT Token>
  const accessToken = authorization.split(" ")[1];

  const response = NextResponse.json("Ok");

  return response;
}
