import React from "react";
import { Modal, Avatar, Input, Form, InputNumber, Button, Space } from "antd";
export default function ModalUser(props) {
  let { isModalVisible, handleOk, handleCancel } = props;
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };
  return (
    <Modal
      title="Basic Modal"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Space direction="vertical" align="center" >
        <Input placeholder="Basic usage" />
        <Input placeholder="Basic usage" />
        <Input placeholder="Basic usage" />
      </Space>
    </Modal>
  );
}
