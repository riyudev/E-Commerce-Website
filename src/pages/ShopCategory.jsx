import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Item from "../components/Items";

const ShopCategory = (props) => {
  const { allProduct } = useContext(ShopContext);

  return (
    <div className="place-items-center">
      <div className="mt-24 mb-10">
        <img src={props.banner} alt="" />
      </div>
      <div>
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
  );
};

export default ShopCategory;
