import React from "react";
import "./style.scss";
import logo from "../../assests/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="wrap">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
