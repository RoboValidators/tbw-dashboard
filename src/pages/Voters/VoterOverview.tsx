import React, { useState } from "react";
import { useRecoilValue } from "recoil";

import OverviewTable from "../../components/VoterOverviewTable";

import { voterOverviewQuery } from "../../recoil/selectors";
import { LIMIT, PAGE } from "../../utils/values";

const VoterOverview = React.memo(() => {
  const [currentPage, setCurrentPage] = useState(PAGE);
  const [limit, setLimit] = useState(LIMIT);

  const voterOverviewData = useRecoilValue(
    voterOverviewQuery({
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
    <OverviewTable
      data={voterOverviewData}
      currentPage={currentPage}
      onChangePage={onChangePage}
      onChangeLimit={onChangeLimit}
    />
  );
});

export default VoterOverview;
