import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { tinkLoginString } from "./helperStrings";

/**
 * @param {boolean} addState: sends the current url to Tink to redirect to the current url (default=true)
 */
const RedirectToTinkLogin = (addState: boolean = true) => {
  const headersList = headers();
  console.log("x-invoke-path", headersList.get("x-invoke-path"));

  if (addState) {
    const headersList = headers();
    console.log("headerList", headersList.get("x-invoke-path"));
    const state = headersList.get("x-invoke-path");
    redirect(tinkLoginString + "&state=" + state);
  }
  redirect(tinkLoginString);
};

export { RedirectToTinkLogin };
