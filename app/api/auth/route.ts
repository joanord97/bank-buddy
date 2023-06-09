import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const req = await request.json();

  const clientId = process.env.TINK_CLIENT_ID;
  const clientSecret = process.env.TINK_CLIENT_SECRET;
  const baseURL = process.env.TINK_BASE_URL;

  const body = {
    code: req.code || "",
    client_id: clientId || "",
    client_secret: clientSecret || "",
    grant_type: "authorization_code",
    scope: "authorization:grant,accounts:read,transactions:read,user:create",
  };

  const authResponse = await fetch(baseURL + "/api/v1/oauth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    body: new URLSearchParams(body),
  });

  if (!authResponse.ok) {
    console.error("!authResponse.ok");
    console.error(authResponse.status, " : ", authResponse.statusText);
    const body = await authResponse.json();
    console.error("error body", body);

    return NextResponse.json(
      { error: authResponse.statusText },
      { status: authResponse.status }
    );
  }

  const tokenBody: TokenType = await authResponse.json();

  const accessToken = {
    token_type: tokenBody.token_type,
    expires_in: tokenBody.expires_in,
    access_token: tokenBody.access_token,
    scope: tokenBody.scope,
    id_hint: tokenBody.id_hint,
  };

  var d = new Date();
  d.setTime(d.getTime() + accessToken.expires_in * 1000);
  var expires = "expires=" + d.toUTCString();

  const response = NextResponse.json("");

  response.headers.append(
    "Set-Cookie",
    `access_token=${accessToken.access_token}; SameSite=Lax; Path=/; Expires=${expires}`
  );

  return response;
}

export type TokenType = {
  token_type: string;
  expires_in: number;
  access_token: string;
  scope: string;
  id_hint: string;
};
