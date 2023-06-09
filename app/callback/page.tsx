"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type searchParamsType = {
  code: string;
  credentialsId: string;
  credentials_id: string;
  state?: string;
};

type PageType = {
  searchParams: searchParamsType;
  params: unknown;
};

const getToken = async (code: string) => {
  await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + "/api/auth", {
    method: "POST",
    cache: "no-store",
    credentials: "include",
    body: JSON.stringify({
      code: code,
    }),
  });
};

const Page = async ({ searchParams }: PageType) => {
  const code = searchParams.code;
  const router = useRouter();

  useEffect(() => {
    getToken(code).then(() => {
      if (searchParams.state) {
        router.push(searchParams.state);
      } else {
        router.push("/");
      }
    });
  }, []);

  return (
    <div>
      <Link href="/">Home</Link>;
    </div>
  );
};

export default Page;
