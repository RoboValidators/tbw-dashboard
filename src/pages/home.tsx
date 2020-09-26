import React from "react";
import { useRecoilValue } from "recoil";

import OverviewTable from "../components/OverviewTable";
import TransactionTable from "../components/TransactionsTable";
import { transactionHistoryQuery } from "../recoil/selectors";

const Home = React.memo(() => {
  const txHistory = useRecoilValue(
    transactionHistoryQuery({
      page: 1,
      limit: 3
    })
  );

  return (
    <div>
      <OverviewTable />
      <br />
      <TransactionTable data={txHistory} />
    </div>
  );
});

export default Home;
