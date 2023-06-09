import { Account } from "./account";

export type ListAccountsResponse = {
  accounts: Array<Account>;
  nextPageToken: string;
};
