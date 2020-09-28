import React from "react";

import { Table } from "antd";

import { TableProps } from "../../types";

const { Column } = Table;

const TransactionTable = React.memo((props: TableProps) => {
  return (
    <Table
      title={() => <h1>Payment history</h1>}
      loading={!props.data?.data}
      rowClassName="hover"
      dataSource={props.data?.data}
      rowKey={() => Math.random()}
      pagination={{
        position: ["bottomRight"],
        current: props.currentPage,
        onChange: props.onChangePage,
        onShowSizeChange: props.onChangeLimit,
        showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
        total: props.data?.meta.totalCount,
        pageSize: props.data?.meta.count
      }}
      onRow={(record) => {
        return {
          onClick: () => window.open(`https://bindscan.io/transactions/${record.txId}`)
        };
      }}
    >
      <Column title="Wallet Address" dataIndex="wallet" ellipsis={true} width={"50%"} />
      <Column
        title="Amount"
        dataIndex="amount"
        key="amount"
        sorter={(a: any, b: any) => a.amount - b.amount}
        render={(value) => `ß ${value}`}
      />
      <Column
        title="Date"
        dataIndex="date"
        key="date"
        responsive={["xxl", "xl", "lg", "md", "sm"]}
        sorter={(a: any, b: any) => a.date - b.date}
        render={(value) => new Date(value).toLocaleString()}
      />
    </Table>
  );
});

export default TransactionTable;
