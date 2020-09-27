import React from "react";

import { Table, Space } from "antd";

import { TableProps } from "../../types";

const { Column } = Table;

const TransactionTable = React.memo((props: TableProps) => {
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
      <Column title="Wallet Address" dataIndex="wallet" key="wallet" />
      <Column
        title="Amount"
        dataIndex="amount"
        key="amount"
        sorter={(a: any, b: any) => a.amount - b.amount}
      />
      <Column
        title="Transaction ID"
        key="txId"
        render={(_, record: any) => (
          <Space size="middle">
            <a href={`https://bindscan.io/transactions/${record.txId}`} target="_blank">
              {record.txId}
            </a>
          </Space>
        )}
      />
    </Table>
  );
});

export default TransactionTable;
