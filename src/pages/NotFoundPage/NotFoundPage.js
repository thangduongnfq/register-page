import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFoundPage.css";
export default function NotFoundPage() {
  let navigator = useNavigate();
  return (
    <div className="page-container">
      <div>
        <p className="textfill">404</p>
        <div
          className="goBack"
          onClick={() => {
            navigator("/Dashboard");
          }}
        >
          <span> Go back to Dashboard </span>
          <i className="fa-solid fa-arrow-left"></i>
        </div>
      </div>
    </div>
  );
}
