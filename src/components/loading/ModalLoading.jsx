import React from "react";
import loadingGif from "../../assest/loading.gif";
import "./ModalLoading.css";
export default function ModalLoading() {
  return (
    <div className="loading">
      <img src={loadingGif} alt="Loading..." />
    </div>
  );
}
