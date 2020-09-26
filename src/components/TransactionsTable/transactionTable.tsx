import React from "react";

import { Table, Space } from "antd";

const { Column } = Table;

interface TransactionTableProps {
  total: number;
}

const TransactionTable = React.memo((props: any) => {
  console.log("ALL PROPS");
  console.log(props);
  console.log("ALL PROPS");
  console.log(props.data);

  return (
    <Table
      dataSource={props.data.data}
      rowKey={Math.random().toString()}
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
        sorter={(a: any, b: any) => {
          console.log(a);
          console.log(b);
          return a.amount - b.amount;
        }}
      />
      <Column
        title="Transaction ID"
        key="txId"
        render={(text, record: any) => (
          <Space size="middle">
            <a href="https://google.be">{record.txId}</a>
          </Space>
        )}
      />
    </Table>
  );
});

export default TransactionTable;
