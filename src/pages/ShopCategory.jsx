import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Item from "../components/Items";
import { IoMdArrowDropdown } from "react-icons/io";

const ShopCategory = (props) => {
  const { allProduct } = useContext(ShopContext);

  return (
    <div className="place-items-center">
      <div className="mt-24 mb-10">
        <img src={props.banner} alt="" />
      </div>

      <div className="mb-24">
        <div className="flex items-center justify-between">
          <p>
            <span className="font-sfproSemiBold">Showing 1-12</span> out of 36
            products
          </p>

          <button className="flex items-center rounded-full border-2 p-2 px-4">
            Sort by <IoMdArrowDropdown />
          </button>
        </div>

        <div className="grid grid-cols-4 space-x-6">
          {allProduct.map((item, i) => {
            if (props.category === item.category) {
              return (
                <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  newPrice={item.newPrice}
                  oldPrice={item.oldPrice}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>

      <button className="rounded-full bg-amber-400 px-12 py-4 hover:bg-amber-500">
        Explore More
      </button>
    </div>
  );
};

export default ShopCategory;
