import React from "react";

import PayoutsOverview from "./PayoutsOverview";
import TransactionTable from "../../components/TransactionsTable";

const PayoutsOverviewIndex = React.memo(() => {
  return (
    <React.Suspense
      fallback={
        <TransactionTable data={null} currentPage={1} onChangePage={null} onChangeLimit={null} />
      }
    >
      <PayoutsOverview />
    </React.Suspense>
  );
});

export default PayoutsOverviewIndex;
