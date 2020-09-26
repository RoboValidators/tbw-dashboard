import { atom } from "recoil";

export const transactionState = atom({
  key: "transactionState",
  default: []
});

export const overviewState = atom({
  key: "overviewState",
  default: []
});
