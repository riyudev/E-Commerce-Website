import React from "react";
import dataProduct from "../assets/Data.js";
import Item from "./Items";

const Popular = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[90%] place-items-center space-y-4">
        <h2>POPULAR IN WOMEN</h2>
        <hr className="w-40 border-[3px] border-amber-400" />
        <div className="flex space-x-5">
          {dataProduct.map((item, i) => {
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
          })}
        </div>
      </div>
    </div>
  );
};

export default Popular;
