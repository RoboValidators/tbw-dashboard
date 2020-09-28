import React from "react";

import VoterOverview from "./VoterOverview";
import VoterOverviewTable from "../../components/VoterOverviewTable";

const VotersOverviewIndex = React.memo(() => {
  return (
    <React.Suspense
      fallback={
        <VoterOverviewTable data={null} currentPage={1} onChangePage={null} onChangeLimit={null} />
      }
    >
      <VoterOverview />
    </React.Suspense>
  );
});

export default VotersOverviewIndex;
