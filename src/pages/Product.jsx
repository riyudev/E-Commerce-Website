import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrums from "../components/Breadcrums";

function Product() {
  const { allProducts } = useContext(ShopContext);
  const { productId } = useParams();
  const product = allProducts.find((e) => e.id === Number(productId));

  return (
    <div>
      <Breadcrums product={product} />
    </div>
  );
}

export default Product;
