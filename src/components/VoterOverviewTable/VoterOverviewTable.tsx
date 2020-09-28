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
      <Column title="Wallet Address" dataIndex="wallet" ellipsis={true} />

      <Column
        title="Pending balance"
        dataIndex="pendingBalance"
        sorter={(a: any, b: any) => a.pendingBalance - b.pendingBalance}
        ellipsis={true}
        render={(value) => `ß ${value}`}
      />
      <Column
        title="Paid balance"
        dataIndex="paidBalance"
        sorter={(a: any, b: any) => a.paidBalance - b.paidBalance}
        responsive={["xxl", "xl", "lg", "md", "sm"]}
        render={(value) => `ß ${value}`}
      />
    </Table>
  );
});

export default VoterOverviewTable;
