import React, { useEffect, useState } from "react";
import { Table, Space, Button, Avatar, Image } from "antd";
import moment from "moment";
import "./AnimalsPage.css";
import animalAPI from "../../api/animalAPI";
import {
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import {
  ModalAddNewUser,
  ModalDelete,
  ModalLoading,
  ModalUser,
} from "../../components/";
import { useGlobalData } from "../../components/GlobalDataProvider/GlobalDataContext";

export default function AnimalsPage() {
  const [animals, setAnimals] = useState();
  const [isModalUserVisible, setIsModaUserlVisible] = useState(false);
  const [isModalDeleteVisible, setIsModaDeletelVisible] = useState(false);
  const [isModalAddNewUser, setisModalAddNewUser] = useState(true);
  const [idUserCurrent, setIdUserCurrent] = useState();
  let globalData = useGlobalData();
  useEffect(() => {
    globalData.fetchAllUserData().then((response) => {
      let convertData = response.map((item) => {
        return {
          ...item,
          createdAt: moment(item).format("DD-MM-YYYY"),
        };
      });
      setAnimals(convertData);
    });
  }, []);
  function showModal() {
    setIsModaUserlVisible(true);
  }
  const handleOk = () => {
    setIsModaUserlVisible(false);
  };
  const handleCancel = () => {
    setIsModaUserlVisible(false);
  };
  const handleDeleteSubmitted = async (userData) => {
    globalData.deleteUserById(userData.id);
    let findIndexUserDelete = animals.map((e) => e.id).indexOf(userData.id);
    let newObject = [
      ...animals.slice(0, findIndexUserDelete),
      ...animals.slice(findIndexUserDelete + 1),
    ];
    setAnimals(newObject);
  };

  const columns = [
    {
      title: "Avatar",
      dataIndex: "avatar",
      render: (item) => (
        <Avatar src={<Image src={item} style={{ width: 32 }} />} />
      ),
    },
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
      dataIndex: "id",
      render: (data) => (
        <Space>
          <Button
            type="danger"
            onClick={() => {
              setIdUserCurrent(data);
              setIsModaDeletelVisible(!isModalDeleteVisible);
            }}
            icon={<DeleteOutlined />}
          >
            Delete
          </Button>
          <Button type="primary" icon={<EditOutlined />}>
            Edit
          </Button>
          <Button
            primary
            icon={<SearchOutlined />}
            onClick={() => {
              showModal();
              setIdUserCurrent(data);
            }}
          >
            View
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
      <ModalUser
        handleCancel={handleCancel}
        handleOk={handleOk}
        isModalVisible={isModalUserVisible}
        idUserView={idUserCurrent}
        totalUsers={animals}
      />
      <ModalDelete
        handleCancel={() => {
          setIsModaDeletelVisible(!isModalDeleteVisible);
        }}
        handleOk={() => {
          setIsModaDeletelVisible(!isModalDeleteVisible);
        }}
        isModalVisible={isModalDeleteVisible}
        idUserView={idUserCurrent}
        totalUsers={animals}
        handleDeleteSubmitted={handleDeleteSubmitted}
      />
      <ModalAddNewUser isModalVisible={isModalAddNewUser} />
      {globalData.loading && <ModalLoading />}
    </div>
  );
}
