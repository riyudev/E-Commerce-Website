import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Breadcrumbs = (props) => {
  const { product } = props;

  return (
    <div className="mt-24 flex items-center p-10 px-5">
      HOME <IoIosArrowForward className="text-2xl opacity-25" /> SHOP{" "}
      <IoIosArrowForward className="text-2xl opacity-25" /> {product.category}{" "}
      <IoIosArrowForward className="text-2xl opacity-25" /> {product.name}
    </div>
  );
};

export default Breadcrumbs;
