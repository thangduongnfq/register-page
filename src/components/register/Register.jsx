import {
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  GooglePlusOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import React, { useEffect, useRef, useState } from "react";
import HiddenPage from "../HiddenPage";
import ModalLoadding from "../loadding/modalLoadding";
import "./Register.css";
export default function () {
  const [showPassword, setShowPassword] = useState(true);
  const passwordUseRef = useRef();
  const [useName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [useNameError, setUseNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  var errors = {
    uppercase: { regex: /[A-Z]/, description: "At least one uppercase letter" },
    lowercase: { regex: /[a-z]/, description: "At least one lowercase letter" },
    digit: { regex: /[0-9]/, description: "At least one digit" },
    special: {
      regex: /[^A-Za-z0-9]/,
      description: "At least one special symbol",
    },
    length: {
      test: (e) => e.length > 2,
      description: "Should be more than 2 characters",
    },
  };
  function showAndHidePassword() {
    // console.log();
    if (passwordUseRef.current.type === "password") {
      passwordUseRef.current.type = "text";
    } else {
      passwordUseRef.current.type = "password";
    }
    setShowPassword(!showPassword);
  }

  function validatePassword(e) {
    return Object.entries(errors).flatMap(
      ([name, { test, regex, description }]) => {
        const isValid = test ? test(e) : regex.test(e);
        return isValid ? [] : { description, name };
      }
    );
  }

  function validateEmail(sEmail) {
    var reEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (!sEmail.match(reEmail)) {
      return "Invalid email address";
    }

    return "";
  }

  return (
    <div className="container">
      <div className="register-form-container">
        <div className="register-form">
          <h1>Create an account</h1>
          <form className="form-input">
            <div className="form-group input">
              <input
                type="text"
                placeholder="Name"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                value={useName}
                onFocus={() => {
                  setUseNameError("");
                }}
                onBlur={(e) => {
                  if (e.target.value.length < 6) {
                    setUseNameError("username must be at least 6 characters");
                  }
                }}
                required="required"
              />
            </div>
            {useNameError !== "" && (
              <span className="error-message">{"* " + useNameError}</span>
            )}
            <div className="form-group input">
              <input
                type="text"
                placeholder="Email Address"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                onFocus={() => {
                  setEmailError("");
                }}
                onBlur={(e) => {
                  let errorMessageEmail = validateEmail(e.target.value);

                  setEmailError(errorMessageEmail);
                }}
                required="required"
              />
            </div>
            {emailError !== "" && (
              <span className="error-message">{"* " + emailError}</span>
            )}
            <div className="form-group input password">
              <input
                type="password"
                placeholder="***********"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                ref={passwordUseRef}
                onFocus={() => {
                  setPasswordError("");
                }}
                onBlur={(e) => {
                  let errorMessage = validatePassword(e.target.value);
                  setPasswordError(errorMessage[0].description);
                }}
                required="required"
              />
              <div onClick={() => showAndHidePassword()}>
                {showPassword ? (
                  <EyeInvisibleOutlined style={{ cursor: "pointer" }} />
                ) : (
                  <EyeOutlined style={{ cursor: "pointer" }} />
                )}
              </div>
            </div>
            {passwordError !== "" && (
              <span className="error-message">{"* " + passwordError}</span>
            )}
            <div className="form-group">
              <div class="checkbox">
                <input id="checkbox1" type="checkbox" />
                <label for="checkbox1">Keep me logged in</label>
              </div>
            </div>
            <div className="form-group button">
              <button
                className="btnSubmit"
                onClick={(e) => {
                  e.preventDefault();
                  // console.log("hello Thang");
                  // setLoading(true);
                  // setTimeout(() => {
                  //   setLoading(false);
                  // }, 1500);
                }}
              >
                Register
              </button>
            </div>
          </form>
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
        </div>
      </div>
      <div className="register-form-container">
        <div className="register-form">
          <h1>Create an account</h1>
          <form className="form-input">
            <div className="form-group input">
              <input type="text" placeholder="Email Address" />
            </div>
            <div className="form-group input">
              <input type="password" placeholder="********" />
            </div>
            <div className="form-group">
              <div class="checkbox">
                <input id="checkbox1" type="checkbox" />
                <label for="checkbox1">Keep me logged in</label>
              </div>
            </div>
            <div className="form-group button">
              <button
                className="btnSubmit"
                onClick={(e) => {
                  e.preventDefault();
                  // console.log("hello Thang");
                  // setLoading(true);
                  // setTimeout(() => {
                  //   setLoading(false);
                  // }, 3000);
                }}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
      <HiddenPage />
      {/* <ModalLoadding /> */}
      {loading && <ModalLoadding />}
    </div>
  );
}
