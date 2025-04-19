import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { CiCircleRemove } from "react-icons/ci";
import { IoIosCheckbox, IoIosCheckboxOutline } from "react-icons/io";

function CartItems() {
  const {
    getCartItemsWithSizes,
    getTotalCartAmount,
    cartItems,
    checkedItems,
    removeFromCart,
    addToCart,
    removeOneFromCart,
    toggleItemCheck,
    toggleAllChecks,
    areAllItemsChecked,
  } = useContext(ShopContext);

  const handleIncrement = (productId, size) => {
    addToCart(productId, size);
  };

  const handleDecrement = (cartItemId) => {
    removeOneFromCart(cartItemId);
  };

  const handleCheckboxToggle = (cartItemId) => {
    toggleItemCheck(cartItemId);
  };

  const handleSelectAllToggle = () => {
    toggleAllChecks(!areAllItemsChecked());
  };

  const isAllChecked = areAllItemsChecked();
  const cartProductsWithSizes = getCartItemsWithSizes();

  return (
    <div className="pt-25">
      <section>
        <div className="grid grid-cols-7 items-center justify-center gap-4 p-2 px-5">
          <div className="flex items-center gap-1 place-self-center">
            <div className="cursor-pointer" onClick={handleSelectAllToggle}>
              {isAllChecked ? (
                <IoIosCheckbox className="text-2xl text-amber-500" />
              ) : (
                <IoIosCheckboxOutline className="text-2xl" />
              )}
            </div>
            <p className="text-sm">Select</p>
          </div>
          <p className="place-self-center text-sm">Products</p>
          <p className="place-self-center text-sm">Title</p>
          <p className="place-self-center text-sm">Price</p>
          <p className="place-self-center text-sm">Quantity</p>
          <p className="place-self-center text-sm">Total</p>
          <p className="place-self-center text-sm">Actions</p>
        </div>
        <hr />
        {cartProductsWithSizes.map((product) => (
          <div
            key={product.cartItemId}
            className={`grid grid-cols-7 items-center justify-center gap-4 border-b px-5 py-4 ${
              checkedItems[product.cartItemId] ? "bg-amber-50" : ""
            }`}
          >
            <div
              className="cursor-pointer place-self-center"
              onClick={() => handleCheckboxToggle(product.cartItemId)}
            >
              {checkedItems[product.cartItemId] ? (
                <IoIosCheckbox className="text-2xl text-amber-500" />
              ) : (
                <IoIosCheckboxOutline className="text-2xl" />
              )}
            </div>
            <img
              src={product.image}
              alt={product.name}
              className="w-10 place-self-center object-cover"
            />
            <p className="place-self-center">
              {product.name}, {product.size}
            </p>
            <p className="place-self-center">${product.newPrice}</p>
            <div className="flex items-center gap-2 place-self-center rounded border">
              <button
                className="cursor-pointer rounded border border-amber-500 px-2 py-1 active:bg-amber-500"
                onClick={() => handleDecrement(product.cartItemId)}
              >
                -
              </button>
              <p>{product.quantity}</p>
              <button
                className="cursor-pointer rounded border border-amber-500 px-2 py-1 active:bg-amber-500"
                onClick={() => handleIncrement(product.productId, product.size)}
              >
                +
              </button>
            </div>
            <p className="place-self-center">
              ${product.quantity * product.newPrice}
            </p>
            <CiCircleRemove
              className="cursor-pointer place-self-center text-3xl text-red-500 hover:text-red-700"
              onClick={() => removeFromCart(product.cartItemId)}
            />
          </div>
        ))}
        <hr />
      </section>

      <section className="sticky bottom-0 flex w-full justify-between border-t bg-white px-[7%] pt-8">
        <div className="space-y-5">
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
