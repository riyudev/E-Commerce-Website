import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { CiCircleRemove } from "react-icons/ci";

function CartItems() {
  const { allProduct, cartItems, addToCart, removeFromCart } =
    useContext(ShopContext);

  return (
    <div className="pt-25">
      <div className="grid grid-cols-6 items-center justify-center gap-4 px-5">
        <p className="place-self-center text-sm">Products</p>
        <p className="place-self-center text-sm">Title</p>
        <p className="place-self-center text-sm">Price</p>
        <p className="place-self-center text-sm">Quantity</p>
        <p className="place-self-center text-sm">Total</p>
        <p className="place-self-center text-sm">Remove</p>
      </div>
      <hr />
      {allProduct.map((product) => {
        if (cartItems[product.id] !== 0) {
          return (
            <div
              key={product.id}
              className="grid grid-cols-6 items-center justify-center gap-4 border-b px-5 py-4"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-10 place-self-center object-cover"
              />
              <p className="place-self-center">{product.name}</p>
              <p className="place-self-center">${product.newPrice}</p>
              <div className="flex items-center place-self-center">
                <button className="rounded border px-2 py-1">
                  {cartItems[product.id]}
                </button>
              </div>
              <p className="place-self-center">
                ${cartItems[product.id] * product.newPrice}
              </p>
              <CiCircleRemove
                className="cursor-pointer place-self-center text-3xl text-red-500 hover:text-red-700"
                onClick={() => removeFromCart(product.id)}
              />
            </div>
          );
        }
      })}
      <hr />
    </div>
  );
}

export default CartItems;
