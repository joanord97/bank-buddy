import Card from "@/components/card/card";
import LongCard from "@/components/card/longCard";
import { Get } from "@/helpers/api";
import { Account } from "@/types/account";
import { ListAccountsResponse } from "@/types/accounts";
import React from "react";

const AccountsPage = async () => {
  const accountResponse = await Get(
    process.env.NEXT_PUBLIC_API_BASE_URL + "/api/account"
  );

  const accounts: ListAccountsResponse = await accountResponse.json();

  return (
    <div>
      <div className="pt-16">
        {accounts.accounts.map((item) => {
          const options = {
            day: "numeric",
            month: "numeric",
            year: "2-digit",
            hour: "numeric",
            minute: "numeric",
          };

          const lastRefreshedDate = Intl.DateTimeFormat("no-NO", options)
            .format(new Date(item.dates.lastRefreshed.toString()))
            .split(",")
            .reverse()
            .join(", ");

          return (
            <LongCard
              id={item.id}
              title={item.name}
              subTitle={item.type}
              data={
                item.balances?.available?.amount?.value?.scale +
                " " +
                item.balances?.available?.amount?.currencyCode
              }
              subData={lastRefreshedDate}
            ></LongCard>
          );
        })}
      </div>
    </div>
  );
};

export default AccountsPage;
