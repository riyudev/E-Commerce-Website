import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Breadcrums = (props) => {
  const { product } = props;

  return (
    <div className="mt-24 flex items-center">
      HOME <IoIosArrowForward /> SHOP <IoIosArrowForward /> {product.category}{" "}
      <IoIosArrowForward /> {product.name}
    </div>
  );
};

export default Breadcrums;
