import React, { useState, useRef } from "react";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
export default function Input({ inputType, functionValidator, placeHolder }) {
  const [inptField, setInputField] = useState("");
  const [inputError, setInputError] = useState("");
  const passwordUseRef = useRef();
  const [showPassword, setShowPassword] = useState(true);
  function showAndHidePassword() {
    if (passwordUseRef.current.type === "password") {
      passwordUseRef.current.type = "text";
    } else {
      passwordUseRef.current.type = "password";
    }
    setShowPassword(!showPassword);
  }
  return (
    <>
      <div
        className={
          inputType === "text"
            ? "form-group input "
            : "form-group input password"
        }
      >
        <input
          type={inputType}
          placeholder={placeHolder}
          onChange={(e) => {
            setInputField(e.target.value);
          }}
          ref={passwordUseRef}
          value={inptField}
          onFocus={() => {
            setInputError("");
          }}
          onBlur={(e) => {
            setInputError(functionValidator(e.target.value));
          }}
          required="required"
        />
        {inputType === "password" && (
          <div onClick={() => showAndHidePassword()}>
            {showPassword ? (
              <EyeInvisibleOutlined style={{ cursor: "pointer" }} />
            ) : (
              <EyeOutlined style={{ cursor: "pointer" }} />
            )}
          </div>
        )}
      </div>
      {inputError !== "" && (
        <span className="error-message">{"* " + inputError}</span>
      )}
    </>
  );
}
