import React from "react";
import { Get } from "@/helpers/api";
import { headers } from "next/headers";

const TransactionsPage = async () => {
  await Get(process.env.NEXT_PUBLIC_API_BASE_URL + "/api/transaction");

  const headersList = headers();
  // console.log("headerList", Array.from(headersList.keys()));
  // console.log("headerList", Array.from(headersList.values()));

  // headersList.forEach((item, item2) => {
  //   console.log("item", item, item2);
  // });

  console.log("x-invoke-path", headersList.get("x-invoke-path"));

  return (
    <div>
      <p>Transactions page</p>
    </div>
  );
};

export default TransactionsPage;
