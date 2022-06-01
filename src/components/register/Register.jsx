import React, { useEffect, useState, useRef } from "react";
import "./Register.css";
import { Input } from "../index";
import { useGlobalData } from "../GlobalDataProvider/GlobalDataContext";
export default function Register() {



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

  function returnValidatePassword(value) {
    let resultValue = validatePassword(value);
    if (resultValue.length > 0) {
      return resultValue[0].description;
    } else {
      return "";
    }
  }

  function validateEmail(sEmail) {
    var reEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (!sEmail.match(reEmail)) {
      return "Invalid email address";
    }
    return "";
  }

  return (
    <div className="register-form">
      <h1>Create an account</h1>
      <form className="form-input">
        <Input
          inputType="text"
          functionValidator={validateUserName}
          placeHolder="Username"
        />
        <Input
          inputType="text"
          functionValidator={validateEmail}
          placeHolder="Email"
        />

        <Input
          inputType="password"
          functionValidator={returnValidatePassword}
          placeHolder="Password"
        />

  
        <div className="form-group button">
          <button
            className="btnSubmit"
            onClick={(e) => {
              e.preventDefault();
              let { username, email, password } = globalData;
              if (
                username.length > 0 &&
                password.length > 0 &&
                email.length > 0
              ) {
                globalData
                  .fetchUserData({ username, password })
              }
            }}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
