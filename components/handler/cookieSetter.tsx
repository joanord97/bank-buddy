"use client";

import { setCookie } from "cookies-next/";

const CookieSetter = (props: { Cookiekey: string; value: string }) => {
  setCookie(props.Cookiekey, props.value, { path: "/" });

  return <div></div>;
};

export default CookieSetter;
