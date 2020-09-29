import React, { useState } from "react";
import { useRecoilValue } from "recoil";

import TransactionTable from "../../components/TransactionsTable";
import { transactionHistoryQuery } from "../../recoil/selectors";
import { LIMIT, PAGE } from "../../utils/values";

const PayoutsOverview = React.memo(() => {
  const [currentPage, setCurrentPage] = useState(PAGE);
  const [limit, setLimit] = useState(LIMIT);

  const txHistoryData = useRecoilValue(
    transactionHistoryQuery({
      page: currentPage,
      limit: limit
    })
  );

  const onChangePage = (page: number) => {
    setCurrentPage(page);
  };

  const onChangeLimit = (limit: number) => {
    setLimit(limit);
  };

  return (
    <TransactionTable
      data={txHistoryData}
      currentPage={currentPage}
      onChangePage={onChangePage}
      onChangeLimit={onChangeLimit}
    />
  );
});

export default PayoutsOverview;
