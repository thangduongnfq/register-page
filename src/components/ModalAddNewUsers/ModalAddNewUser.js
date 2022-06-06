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
    handleCreateUser,
    handleCancel,
    idUserView,
    totalUsers,
  } = props;
  const [form] = Form.useForm();
  const { Option } = Select;

  const dateFormat = "YYYY/MM/DD";

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
              handleCreateUser(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          layout="vertical"
          name="form_in_modal"
          initialValues={{ age: "3" }}
        >
          <Form.Item name="name" label="Name">
            <Input value />
          </Form.Item>
          <Form.Item name="type" label="Type">
            <Select placeholder="Please select type of animal">
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
            <DatePicker format={dateFormat} />
          </Form.Item>

          <Form.Item name="age" label="Age">
            <InputNumber min={"1"} max={"100"} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
