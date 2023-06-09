"use client";

import { getCookie, setCookie } from "cookies-next";
import React from "react";

const ClientPage = () => {
  const token = getCookie("testToken");

  const helloWorld = getCookie("test");

  return (
    <div>
      <p>token: {token || "no token"}</p>
      <p>hello world: {helloWorld}</p>
    </div>
  );
};

export default ClientPage;
