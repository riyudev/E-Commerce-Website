import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { CiCircleRemove } from "react-icons/ci";

function CartItems() {
  const { allProduct, getTotalCartAmount, cartItems, removeFromCart } =
    useContext(ShopContext);

  return (
    <div className="pt-25">
      <section>
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
          return null;
        })}
        <hr />
      </section>

      <section className="flex justify-between px-[7%] pt-14">
        <div className="space-y-8">
          <h3>cart total</h3>

          <div className="w-xl">
            <div className="flex justify-between p-2">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>

            <hr />

            <div className="flex justify-between p-2">
              <p>Shipping</p>
              <p>free</p>
            </div>

            <hr />

            <div className="flex justify-between p-2">
              <p>Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
          </div>

          <button className="bg-amber-400 px-10 py-3.5 hover:bg-amber-500">
            PROCEED TO CHECKOUT
          </button>
        </div>

        <div className="space-y-3">
          <p className="text-sm">
            If you have promo code, please enter it here
          </p>
          <div className="border-2 border-gray-200 pl-5">
            <input
              type="text"
              placeholder="promo code"
              className="focus:outline-none"
            />
            <button className="bg-amber-400 px-12 py-3 hover:bg-amber-500">
              Submit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CartItems;
