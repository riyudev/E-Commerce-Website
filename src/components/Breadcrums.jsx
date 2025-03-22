import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Breadcrums() {
  const { product } = props;

  return (
    <div>
      HOME <FaArrowRight /> SHOP <FaArrowRight /> {product.category}{" "}
      <FaArrowRight /> {product.name}
    </div>
  );
}

export default Breadcrums;
