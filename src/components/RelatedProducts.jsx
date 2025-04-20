import React, { useContext } from "react";
import Item from "./Items";
import { ShopContext } from "../context/ShopContext";

function RelatedProducts({ category, productId }) {
  const { allProduct } = useContext(ShopContext);

  const relatedProducts = allProduct
    .filter(
      (product) =>
        product.category ===
          category.charAt(0).toUpperCase() + category.slice(1) &&
        product.id !== Number(productId),
    )
    .slice(0, 8); // Show only 8 related products

  return (
    <div className="flex items-center justify-center pt-20">
      <div className="w-[90%] place-items-center space-y-4">
        <h3>RELATED PRODUCTS</h3>
        <hr className="w-40 border-[3px] border-amber-400" />
        <div className="grid grid-cols-4 space-y-5 space-x-6">
          {relatedProducts.map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              newPrice={item.newPrice}
              oldPrice={item.oldPrice}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RelatedProducts;
