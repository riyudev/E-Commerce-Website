import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { CiCircleRemove } from "react-icons/ci";
import { IoIosCheckbox, IoIosCheckboxOutline } from "react-icons/io";

function CartItems() {
  const {
    getCartProducts,
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

  const handleIncrement = (id) => {
    addToCart(id);
  };

  const handleDecrement = (id) => {
    removeOneFromCart(id);
  };

  const handleCheckboxToggle = (id) => {
    toggleItemCheck(id);
  };

  const handleSelectAllToggle = () => {
    toggleAllChecks(!areAllItemsChecked());
  };

  const isAllChecked = areAllItemsChecked();
  const cartProducts = getCartProducts();

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
        {cartProducts.map((product) => (
          <div
            key={product.id}
            className={`grid grid-cols-7 items-center justify-center gap-4 border-b px-5 py-4 ${
              checkedItems[product.id] ? "bg-amber-50" : ""
            }`}
          >
            <div
              className="cursor-pointer place-self-center"
              onClick={() => handleCheckboxToggle(product.id)}
            >
              {checkedItems[product.id] ? (
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
            <p className="place-self-center">{product.name}</p>
            <p className="place-self-center">${product.newPrice}</p>
            <div className="flex items-center gap-2 place-self-center rounded border">
              <button
                className="cursor-pointer rounded border border-amber-500 px-2 py-1 active:bg-amber-500"
                onClick={() => handleDecrement(product.id)}
              >
                -
              </button>
              <p>{cartItems[product.id]}</p>
              <button
                className="cursor-pointer rounded border border-amber-500 px-2 py-1 active:bg-amber-500"
                onClick={() => handleIncrement(product.id)}
              >
                +
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
        ))}
        <hr />
      </section>

      <section className="sticky bottom-0 flex w-full justify-between border-t bg-white px-[7%] pt-8">
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
