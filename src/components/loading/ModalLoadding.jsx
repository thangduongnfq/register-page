import React from "react";
import loadingGif from "../../assest/loadding.gif";
import "./modalLoadding.css";
export default function ModalLoadding() {
  return (
    <div className="loading">
      {/* <div className="loadingImage"> */}
      <img src={loadingGif} alt="Loading..." />
      {/* </div> */}
    </div>
  );
}
