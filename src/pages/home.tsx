import React from "react";
import { useRecoilValue } from "recoil";

import OverviewTable from "../components/VoterOverviewTable";
import TransactionTable from "../components/TransactionsTable";
import { transactionHistoryQuery } from "../recoil/selectors";

const Home = React.memo(() => {
  const txHistory = useRecoilValue(
    transactionHistoryQuery({
      page: 1,
      limit: 3
    })
  );

  return <div>Lol</div>;
});

export default Home;
