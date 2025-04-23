import React from "react";
import dataProduct from "../assets/WomenData.js";
import Item from "./Items";

const Popular = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="laptop:w-[90%] w-[95%] place-items-center space-y-4">
        <h3>POPULAR IN WOMEN</h3>
        <hr className="w-40 border-[3px] border-amber-400" />
        <div className="laptop:grid-cols-4 tablet:gap-x-6 grid w-auto grid-cols-2 gap-x-3">
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
