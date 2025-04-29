import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Item from "../components/Items";
import { IoMdArrowDropdown } from "react-icons/io";

const ShopCategory = (props) => {
  const { allProduct } = useContext(ShopContext);

  const categoryLower = props.category.toLowerCase();

  return (
    <div className="place-items-center">
      <div className="laptop:mt-24 mt-[83px] mb-10">
        <img src={props.banner} alt="" />
      </div>

      <div className="laptop:mb-24 mb-16 px-3">
        <div className="flex items-center justify-between">
          <p className="laptop:text-lg text-sm">
            <span className="font-sfproSemiBold">Showing 1-12</span> out of 36
            products
          </p>

          <button className="laptop:text-lg flex items-center rounded-full border-2 p-2 px-4 text-sm text-nowrap">
            Sort by <IoMdArrowDropdown />
          </button>
        </div>

        <div className="laptop:grid-cols-4 laptop:space-x-6 grid grid-cols-2 gap-x-3">
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
                  category={categoryLower}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>

      <button className="laptop:mb-0 mb-16 rounded-full bg-amber-400 px-12 py-4 hover:bg-amber-500">
        Explore More
      </button>
    </div>
  );
};

export default ShopCategory;
