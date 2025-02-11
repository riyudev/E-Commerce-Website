import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const ShopCategory = (props) => {
  return (
    <div className="place-items-center">
      <div className="mt-24">
        <img src={props.banner} alt="" />
      </div>
    </div>
  );
};

export default ShopCategory;
