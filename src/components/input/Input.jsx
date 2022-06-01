import React, { useState, useRef, useEffect } from "react";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { useGlobalData } from "../../components/GlobalDataProvider/GlobalDataContext";
export default function Input({ inputType, functionValidator, placeHolder }) {
  const [inptField, setInputField] = useState("");
  const [inputError, setInputError] = useState("");
  const [onBlurState, setOnBlur] = useState(false);
  const passwordUseRef = useRef();
  const ref = useRef();
  const [showPassword, setShowPassword] = useState(true);
  let globalData = useGlobalData();
  useEffect(() => {
    if (inputError.length == 0) {
      globalData.setField(placeHolder.toLowerCase(), inptField);
    }
  }, [onBlurState]);

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
        ref={ref}
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
            if (functionValidator(e.target.value).length > 0) {
              setInputError(functionValidator(e.target.value));
            } else {
              setInputError("");
            }
            setOnBlur(!onBlurState);
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
