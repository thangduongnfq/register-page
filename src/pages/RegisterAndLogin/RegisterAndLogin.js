import React, { useEffect, useRef, useState } from "react";
import HiddenPage from "../../components/HiddenPage/HiddenPage";
import { Register, ModalLoading, LoginPage } from "../../components";
import { useGlobalData } from "../../components/GlobalDataProvider/GlobalDataContext";
import "./RegisterAndLogin.css";
import { useNavigate } from "react-router-dom";
export default function () {
  let globalData = useGlobalData();
  let navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("roles")) {
      navigate("/Dashboard");
    }
  }, []);
  return (
    <div className="container">
      <div className="register-form-container">
        <Register />
      </div>
      <div className="register-form-container">
        <LoginPage />
      </div>
      <HiddenPage />
      {globalData.loading && <ModalLoading />}
    </div>
  );
}
