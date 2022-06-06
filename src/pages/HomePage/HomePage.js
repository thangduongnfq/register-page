import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  let navigator = useNavigate();
  return (
    <div className="page-container">
      <div>
        <p className="textfill">Home</p>
        <div
          className="goBack"
          onClick={() => {
            console.log('hello')
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
