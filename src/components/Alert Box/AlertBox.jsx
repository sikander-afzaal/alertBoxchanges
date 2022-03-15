import React from "react";
import "./AlertBox.css";
import img from "./faq-piggy.png";
import cross from "./cross.svg";
function AlertBox() {
  return (
    <div className="alert-box">
      <img
        onClick={() => {
          document.querySelector(".alert-box").classList.remove("open-alert");
        }}
        src={cross}
        alt=""
        className="cross"
      />
      <img className="piggy-img" src={img} alt="" />
      <p className="text-alert"></p>
    </div>
  );
}

export default AlertBox;
