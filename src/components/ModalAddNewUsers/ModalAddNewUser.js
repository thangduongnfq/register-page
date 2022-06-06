import { Space , Modal} from "antd";

import React, { useState } from "react";

export default function ModalAddNewUser(props) {
  let { isModalVisible, handleCancel, onOk } = props;
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <Modal visible={isModalVisible}>
      <Space></Space>
    </Modal>
  );
}
