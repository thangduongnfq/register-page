import React, { useEffect, useState, useRef } from "react";
import "./LoginPage.css";
import { Input } from "../index";
import { useGlobalData } from "../GlobalDataProvider/GlobalDataContext";
export default function LoginPage() {
  let [checkBox, setCheckbox] = useState(true);
  let globalData = useGlobalData();
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
  function returnValidatePassword(value) {
    let resultValue = validatePassword(value);
    if (resultValue.length > 0) {
      return resultValue[0].description;
    } else {
      return "";
    }
  }
  function validateUserName(value) {
    if (value.length < 6) {
      return "username must be at least 6 characters";
    }
    return "";
  }
  function validatePassword(value) {
    return Object.entries(errors).flatMap(
      ([name, { test, regex, description }]) => {
        const isValid = test ? test(value) : regex.test(value);
        return isValid ? [] : { description, name };
      }
    );
  }
  return (
    <div className="register-form">
      <h1>Login</h1>
      <form className="form-input">
        <Input
          inputType="text"
          functionValidator={validateUserName}
          placeHolder="Username"
        />
        <Input
          inputType="password"
          functionValidator={returnValidatePassword}
          placeHolder="Password"
        />
        <div className="form-group">
          <div className="checkbox">
            <div className="checkboxContainer check">
              <input
                className={checkBox ? "checkbox1" : "checkbox1 check"}
                type="checkbox"
                onClick={() => {
                  setCheckbox(!checkBox);
                }}
              />
            </div>
            <label
              onClick={() => {
                setCheckbox(!checkBox);
              }}
              htmlFor="checkbox1"
            >
              Keep me logged in
            </label>
          </div>
        </div>
        <div className="form-group button">
          <button
            className="btnSubmit"
            onClick={(e) => {
              e.preventDefault();
              let { username, password } = globalData;
            }}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
