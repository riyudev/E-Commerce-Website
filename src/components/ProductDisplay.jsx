import React from "react";
import { FaStar, FaRegStar, FaStarHalf } from "react-icons/fa";

const ProductDisplay = (props) => {
  const { product } = props;
  return (
    <div className="flex justify-center space-x-10 px-5">
      <div className="flex size-fit gap-4">
        <div className="flex flex-col justify-between">
          <img src={product.image} alt="" className="w-[105px]" />
          <img src={product.image} alt="" className="w-[105px]" />
          <img src={product.image} alt="" className="w-[105px]" />
          <img src={product.image} alt="" className="w-[105px]" />
        </div>
        <div className="w-fit">
          <img src={product.image} alt="" className="w-3xl object-cover" />
        </div>
      </div>

      <div className="space-y-5">
        <h3>{product.name}</h3>
        <div className="flex items-center space-x-1">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStar />
          <p className="text-sm">(122)</p>
        </div>

        <div>
          <p className="text-black/50 line-through">${product.oldPrice}</p>
          <h4 className="font-sfproSemiBold text-amber-500">
            ${product.newPrice}
          </h4>
        </div>

        <blockquote>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            tristique orci sagittis, tempus velit finibus, feugiat arcu. Sed at
            est leo. Suspendisse potenti. Pellentesque porttitor at eros a
            consequat.
          </p>
        </blockquote>

        <div className="space-y-6">
          <h5>Select Size</h5>
          <div className="flex space-x-4">
            <div className="border-2 p-2 px-4">S</div>
            <div className="border-2 p-2 px-4">M</div>
            <div className="border-2 p-2 px-4">L</div>
            <div className="border-2 p-2 px-4">XL</div>
            <div className="border-2 p-2 px-4">XXL</div>
          </div>
          <button className="bg-amber-400 p-3.5 px-4.5 hover:bg-amber-500">
            ADD TO CART
          </button>
          <div>
            <p className="text-base">
              <span className="font-sfproSemiBold">Category :</span> Women,
              T-Shirt, Crop Top
            </p>
            <p className="text-base">
              <span className="font-sfproSemiBold">Tags :</span> Modern, Latest
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
