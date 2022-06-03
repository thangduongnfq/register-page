import React, { useEffect, useState } from "react";
import { Table, Space, Button } from "antd";
import moment from "moment";
import "./AnimalsPage.css";
import animalAPI from "../../api/animalAPI";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
// DeleteOutlined
export default function AnimalsPage() {
  const [animals, setAnimals] = useState();
  const getAnimals = async () => {
    let data = await animalAPI.getAll();
    return data;
  };
  useEffect(() => {
    getAnimals().then((response) => {
      let convertData = response.map((item) => {
        return {
          ...item,
          createdAt: moment(item).format("DD-MM-YYYY"),
        };
      });
      setAnimals(convertData);
    });
  }, []);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "createdAt",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space>
          <Button type="danger" icon={<DeleteOutlined />}>
            Delete
          </Button>
          <Button type="primary" icon={<EditOutlined />}>
            Edit
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="table-container">
      <div>
        <Table
          dataSource={animals}
          columns={columns}
          footer={() => (
            <Button type="primary" block style={{ padding: 0 }}>
              Add new
            </Button>
          )}
        />
        ;
      </div>
    </div>
  );
}
