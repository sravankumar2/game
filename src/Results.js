import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Button } from "antd";
const columns = [
  {
    title: "Id",
    dataIndex: "Id",
    width: 100,
  },
  {
    title: "Slot1",
    dataIndex: "Slot1",
    width: 100,
  },
  {
    title: "Slot2",
    dataIndex: "Slot2",
    width: 100,
  },
  {
    title: "Slot3",
    dataIndex: "Slot3",
    width: 100,
  },
  {
    title: "balance",
    dataIndex: "balance",
    width: 100,
  },
  {
    title: "time",
    dataIndex: "time",
    width: 100,
  },
];
const s = JSON.parse(localStorage.getItem("tableData"));

const data = [];

for (let i = 0; i < data.length; i++) {
  data.push(s);
}

const Results = () => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{ pageSize: 10 }}
      scroll={{ y: 240 }}
      style={{ marginTop: "100px" }}
    />
  );
};

export default Results;
