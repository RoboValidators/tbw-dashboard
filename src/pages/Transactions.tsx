import React, { useState } from "react";
import { useRecoilValue } from "recoil";

import TransactionTable from "../components/TransactionsTable";
import { transactionHistoryQuery } from "../recoil/selectors";

const Transactions = React.memo(() => {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(2);

  const txHistory = useRecoilValue(
    transactionHistoryQuery({
      page: currentPage,
      limit: limit
    })
  );

  const onChangePage = (page: number) => {
    console.log("Setting page", page);
    setCurrentPage(page);
  };

  const onChangeLimit = (limit: number) => {
    console.log("Setting limit", limit);
    setLimit(limit);
  };

  return (
    <TransactionTable
      data={txHistory}
      currentPage={currentPage}
      limit={limit}
      onChangePage={onChangePage}
      onChangeLimit={onChangeLimit}
    />
  );
});

export default Transactions;
