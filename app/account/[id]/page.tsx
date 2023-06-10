import { Get } from "@/helpers/api";
import React from "react";

const TransactionsPage = async ({ params }: any) => {
  const accountResponse = await Get(
    process.env.NEXT_PUBLIC_API_BASE_URL + `/api/transaction?id=${params.id}`
  );

  const transactions: any = await accountResponse.json();

  console.log("transactions", transactions);

  return <div>TransactionsPage: {params.id}</div>;
};

export default TransactionsPage;
