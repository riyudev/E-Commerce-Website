import React from "react";
import { FaStar, FaRegStar, FaStarHalf } from "react-icons/fa";

const ProductDisplay = (props) => {
  const { product } = props;
  return (
    <div className="flex justify-center px-5">
      <div className="grid grid-cols-2">
        <div className="">
          <img src={product.image} alt="" className="w-" />
          <img src={product.image} alt="" className="w-" />
          <img src={product.image} alt="" className="w-" />
          <img src={product.image} alt="" className="w-" />
        </div>
        <div className="">
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

        <div>
          <p>${product.oldPrice}</p>
          <p>${product.newPrice}</p>
        </div>

        <blockquote>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            tristique orci sagittis, tempus velit finibus, feugiat arcu. Sed at
            est leo. Suspendisse potenti. Pellentesque porttitor at eros a
            consequat.
          </p>
        </blockquote>

        <div>
          <h5>Select Size</h5>
          <div>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
          <button>ADD TO CART</button>
          <div>
            <p>
              <span>Category :</span> Women, T-Shirt, Crop Top
            </p>
            <p>
              <span>Tags :</span> Modern, Latest
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
