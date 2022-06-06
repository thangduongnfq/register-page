import React, { useEffect, useState } from "react";
import {
  Modal,
  Avatar,
  Input,
  Form,
  InputNumber,
  Button,
  Space,
  Select,
  DatePicker,
} from "antd";
export default function ModalAddNewUSer(props) {
  const {
    isModalVisible,
    handleEditSubmitted,
    handleCancel,
    idUserView,
    totalUsers,
  } = props;
  const [form] = Form.useForm();
  const { Option } = Select;

  const dateFormat = "YYYY/MM/DD";

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
    <>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              console.log(userData)
              handleEditSubmitted({
                id: userData.id,
                name: values.name,
                createAt: values.createAt,
                age: values.age,
              });
              console.log(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
        onCancel={handleCancel}
      >
        {userData && (
          <Form
            form={form}
            layout="vertical"
            name="form_in_modal"
            initialValues={{ age: "3" }}
          >
            <Form.Item name="name" label="Name">
              <Input placeholder={userData.name} value />
            </Form.Item>
            <Form.Item name="type" label="Type">
              <Select
                placeholder="Please select type of animal"
                // defaultValue={userData.type}
              >
                <Option value="bear">Bear</Option>
                <Option value="insect">Insect</Option>
                <Option value="dog">Dog</Option>
                <Option value="horse">Horse</Option>
                <Option value="crocodilia">Crocodila</Option>
                <Option value="snake">Snake</Option>
                <Option value="cetacean">Cetacean</Option>
              </Select>
            </Form.Item>

            <Form.Item name="createdAt" label="Date of Born">
              <DatePicker format={dateFormat} placeholder={userData.createAt} />
            </Form.Item>

            <Form.Item name="age" label="Age">
              <InputNumber min={"1"} max={"100"} />
            </Form.Item>
          </Form>
        )}
      </Modal>
    </>
  );
}
