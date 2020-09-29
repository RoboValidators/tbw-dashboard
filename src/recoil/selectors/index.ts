import axios from "axios";
import { selectorFamily } from "recoil";

const baseUrl = process.env.REACT_APP_SERVER_BASE_URL;

export const transactionHistoryQuery = selectorFamily({
  key: "transactionHistoryQuery",
  get: ({ page, limit }: { page: number; limit: number }) => async () => {
    const response = await axios.get(`${baseUrl}/transactions`, {
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
    const response = await axios.get(`${baseUrl}/simple`, {
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
