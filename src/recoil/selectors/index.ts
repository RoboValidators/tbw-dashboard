import axios from "axios";
import { selectorFamily } from "recoil";

const getBaseUrl = () => {
  if (process.env.NODE_ENV === "development") {
    return process.env.REACT_APP_SERVER_BASE_URL_TESTNET;
  } else {
    return process.env.REACT_APP_SERVER_BASE_URL;
  }
};

export const transactionHistoryQuery = selectorFamily({
  key: "transactionHistoryQuery",
  get: ({ page, limit }: { page: number; limit: number }) => async () => {
    const response = await axios.get(`${getBaseUrl()}/transactions`, {
      params: {
        page,
        limit
      }
    });
    if (response.status !== 200) {
      return response.statusText;
    }

    return response.data;
  }
});

export const voterOverviewQuery = selectorFamily({
  key: "voterOverviewQuery",
  get: ({ page, limit }: { page: number; limit: number }) => async () => {
    const response = await axios.get(`${getBaseUrl()}/simple`, {
      params: {
        page,
        limit
      }
    });
    if (response.status !== 200) {
      return response.statusText;
    }

    return response.data;
  }
});
