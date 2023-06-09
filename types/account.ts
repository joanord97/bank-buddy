export type Account = {
  balances?: Balances;
  customerSegment?: CustomerSegment;
  dates: Dates;
  financialInstitutionId?: string;
  id: string;
  identifiers?: Identifiers;
  name: string;
  type: Type;
};

export type Balances = { available?: Balance; booked?: Balance };

export type Balance = { amount?: CurrencyDenominatedAmount };

export type CurrencyDenominatedAmount = {
  currencyCode?: string;
  value?: ExactNumber;
};

export type ExactNumber = { scale?: string; unscaledValue?: string };

export type CustomerSegment =
  | "UNDEFINED_CUSTOMER_SEGMENT"
  | "PERSONAL"
  | "BUSINESS";

export type Dates = { lastRefreshed: Date };

export type Identifiers = {
  financialInstitution?: FinancialInstitution;
  iban?: IBAN;
  pan?: Pan;
  sortCode?: SortCode;
};

export type FinancialInstitution = {
  accountNumber?: string;
  referenceNumbers?: object;
};

export type IBAN = { bban: string; bic?: string; iban: string };

export type Pan = { masked: string };

export type SortCode = { accountNumber: string; code: string };

export type Type = "UNDEFINED" | "CHECKING" | "SAVINGS" | "CREDIT_CARD";
