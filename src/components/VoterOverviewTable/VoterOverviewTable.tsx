import React from "react";
import { Table } from "antd";

import { TableProps } from "../../types";

const { Column } = Table;

const VoterOverviewTable = React.memo((props: TableProps) => {
  return (
    <Table
      dataSource={props.data.data}
      rowKey={() => Math.random()}
      pagination={{
        position: ["bottomRight"],
        current: props.currentPage,
        onChange: props.onChangePage,
        onShowSizeChange: props.onChangeLimit,
        showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
        total: props.data.meta.totalCount,
        pageSize: props.data.meta.count
      }}
    >
      <Column title="Wallet Address" dataIndex="wallet" />

      <Column
        title="Pending BIND Balance"
        dataIndex="pendingBalance"
        sorter={(a: any, b: any) => a.pendingBalance - b.pendingBalance}
      />
      <Column
        title="Paid BIND Balance"
        dataIndex="paidBalance"
        sorter={(a: any, b: any) => a.paidBalance - b.paidBalance}
      />
    </Table>
  );
});

export default VoterOverviewTable;
