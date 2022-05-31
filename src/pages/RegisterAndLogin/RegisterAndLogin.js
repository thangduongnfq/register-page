import React, { useEffect, useRef, useState } from "react";
import HiddenPage from "../../components/HiddenPage/HiddenPage";
import { Register, ModalLoadding } from "../../components";
import { useGlobalData } from "../../components/GlobalDataProvider/GlobalDataContext";
import "./RegisterAndLogin.css";
export default function () {
  let globalData = useGlobalData();
  return (
    <div className="container">
      <div className="register-form-container">
        <Register />
      </div>
      <div className="register-form-container">
        <Register />
      </div>
      <HiddenPage />
      {
          globalData.loading && <ModalLoadding/>
      }
    </div>
  );
}
