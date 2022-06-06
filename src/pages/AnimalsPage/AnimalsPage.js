import React, { useEffect, useState } from "react";
import { Table, Space, Button, Avatar, Image } from "antd";
import moment from "moment";
import "./AnimalsPage.css";

import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
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
  const [isModalAddNewUser, setisModalAddNewUser] = useState(false);
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
    setIsModaDeletelVisible(!isModalDeleteVisible);
  };
  const handleUserEdit = async (userData) => {
    globalData.editUserById(userData);
    let findIndexUserDelete = animals.map((e) => e.id).indexOf(userData.id);
    let newObject = [
      ...animals.slice(0, findIndexUserDelete),
      ...animals.slice(findIndexUserDelete + 1),
    ];
    setAnimals(newObject);
  };

  const handleCreateUser = async (userData) => {
    globalData.addNewUserFunction(userData);
    console.log(userData);
    let newObject = [{ ...userData, avatar: "" }, ...animals.slice(0)];
    setAnimals(newObject);
    setisModalAddNewUser(!isModalAddNewUser);
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

          <Button
            type="primary"
            icon={<EditOutlined />}
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
            <Button
              type="primary"
              block
              style={{ padding: 0 }}
              onClick={() => {
                setisModalAddNewUser(!isModalAddNewUser);
              }}
            >
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
        handleEditSubmitted={handleUserEdit}
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
      <ModalAddNewUser
        isModalVisible={isModalAddNewUser}
        idUserView={idUserCurrent}
        totalUsers={animals}
        handleCreateUser={handleCreateUser}
      />
      {globalData.loading && <ModalLoading />}
    </div>
  );
}
