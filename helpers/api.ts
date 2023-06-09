import { cookies, headers } from "next/headers";
import { RedirectToTinkLogin } from "./login";

const Get = async (url: string, redirectToCurrent = true) => {
  const cookieStore = cookies();

  const headersList = headers();
  console.log("x-invoke-path", headersList.get("x-invoke-path"));
  console.log("Referer", headersList.get("Referer"));

  if (!cookieStore.has("access_token")) {
    RedirectToTinkLogin(redirectToCurrent);
  }

  const accessToken = cookieStore.get("access_token");

  const response = await fetch(url, {
    method: "GET",
    credentials: "include",
    cache: "no-store",
    headers: { Authorization: "Bearer " + accessToken?.value },
  });

  if (response.status === 401) {
    RedirectToTinkLogin(redirectToCurrent);
  }

  return response;
};

export { Get };
