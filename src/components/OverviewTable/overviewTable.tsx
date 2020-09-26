import React from "react";

import { Table } from "antd";

const { Column } = Table;

const data = [
  {
    key: "1",
    firstName: "John",
    lastName: "Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"]
  },
  {
    key: "2",
    firstName: "Jim",
    lastName: "Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"]
  },
  {
    key: "3",
    firstName: "Joe",
    lastName: "Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"]
  }
];

const OverviewTable = React.memo(() => {
  return (
    <Table dataSource={data}>
      <Column title="Address" dataIndex="age" key="age" />
      <Column title="Pending" dataIndex="address" key="address" />
      <Column title="Paid" dataIndex="address" key="address" />
    </Table>
  );
});

export default OverviewTable;
