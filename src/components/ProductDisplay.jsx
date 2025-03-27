import React from "react";
import { FaStar, FaRegStar, FaStarHalf } from "react-icons/fa";

const ProductDisplay = (props) => {
  const { product } = props;
  return (
    <div>
      <div>
        <div>
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div>
          <img src={product.image} alt="" />
        </div>
      </div>

      <div>
        <h4>{product.name}</h4>

        <div>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStar />
          <p>(122)</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
