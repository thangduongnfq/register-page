import React from "react";
import {
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  GooglePlusOutlined,
} from "@ant-design/icons";
export default function FooterRegister() {
  return (
    <div className="footer-container">
      <div>
        <FacebookOutlined />
      </div>
      <div>
        <TwitterOutlined />
      </div>
      <div>
        <GooglePlusOutlined />
      </div>
      <div>
        <LinkedinOutlined />
      </div>
    </div>
  );
}
