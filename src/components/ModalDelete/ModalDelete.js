import React, { useEffect, useState } from "react";
import { Modal, Avatar, Input, Form, InputNumber, Button, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useGlobalData } from "../GlobalDataProvider/GlobalDataContext";
export default function DeleteModal(props) {
  const {
    isModalVisible,
    handleDeleteSubmitted,
    handleCancel,
    idUserView,
    totalUsers,
  } = props;
  const [userData, setUserData] = useState();
  useEffect(() => {
    if (idUserView) {
      let userFoundInToTalUser = totalUsers.filter((item) => {
        return item.id === idUserView;
      });
      setUserData(...userFoundInToTalUser);
    }
  }, [idUserView]);
  return (
    <Modal
      title="Delete"
      visible={isModalVisible}
      onOk={() => handleDeleteSubmitted(userData)}
      onCancel={handleCancel}
      okType="danger"
    >
      {userData && <p>Do you want to delete {userData.name}</p>}
    </Modal>
  );
}
