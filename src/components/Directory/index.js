import React from "react";
import "./style.scss";
import Shopmens from "./../../assests/mens.jpg";
import ShopWomens from "./../../assests/women.jpg";
import { Link } from "react-router-dom";

const Directory = () => {
  return (
    <div className="directory">
      <div className="wrap">
        <div className="item" style={{ backgroundImage: `url(${ShopWomens})` }}>
          <Link>Shop for women</Link>
        </div>
        <div className="item" style={{ backgroundImage: `url(${Shopmens})` }}>
          {" "}
          <Link>Shop for men</Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default Directory;
