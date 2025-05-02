import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Breadcrumbs = (props) => {
  const { product } = props;

  return (
    <div className="laptop:mt-24 mt-12 flex items-center p-5 pt-10">
      HOME <IoIosArrowForward className="text-2xl opacity-25" /> SHOP{" "}
      <IoIosArrowForward className="text-2xl opacity-25" /> {product.category}{" "}
      <IoIosArrowForward className="text-2xl opacity-25" /> {product.name}
    </div>
  );
};

export default Breadcrumbs;
