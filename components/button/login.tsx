import { tinkLoginString } from "@/helpers/helperStrings";
import Link from "next/link";
import React from "react";

const LoginButton = () => {
  const tinkUrl = tinkLoginString;

  return (
    <Link className="btn" href={tinkUrl}>
      Login
    </Link>
  );
};

export default LoginButton;
