import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import ProductDisplay from "../components/ProductDisplay";
import Descriptionbox from "../components/Descriptionbox";
import RelatedProducts from "../components/RelatedProducts";

function Product() {
  const { allProduct } = useContext(ShopContext);
  const { productId } = useParams();
  const product = allProduct.find((e) => e.id === Number(productId));

  return (
    <div className="px-[5%]">
      <Breadcrumbs product={product} />
      <ProductDisplay product={product} />
      <Descriptionbox />
      <RelatedProducts />
    </div>
  );
}

export default Product;
