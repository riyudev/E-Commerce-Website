import React, { createContext, useState } from "react";
import allProduct from "../assets/AllProducts.js";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < allProduct.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const getDefaultCheckedItems = () => {
  let checkedItems = {};
  for (let i = 1; i < allProduct.length + 1; i++) {
    checkedItems[i] = true; // All items are checked by default
  }
  return checkedItems;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [checkedItems, setCheckedItems] = useState(getDefaultCheckedItems());
  const [cartOrder, setCartOrder] = useState([]); // Tracks order of items added to cart

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));

    // If this is the first of this item being added, add it to the front of cartOrder
    if (cartItems[itemId] === 0) {
      setCartOrder((prevOrder) => {
        const newOrder = [...prevOrder];
        // Remove itemId if it exists in the array already
        const index = newOrder.indexOf(itemId);
        if (index > -1) {
          newOrder.splice(index, 1);
        }
        // Add itemId to the beginning of the array
        return [itemId, ...newOrder];
      });
    }
  };

  const removeOneFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0,
    }));

    // If the item count becomes 0, remove it from cartOrder
    if (cartItems[itemId] === 1) {
      setCartOrder((prevOrder) => prevOrder.filter((id) => id !== itemId));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: 0,
    }));

    // Remove from cartOrder
    setCartOrder((prevOrder) => prevOrder.filter((id) => id !== itemId));
  };

  const toggleItemCheck = (itemId) => {
    setCheckedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const toggleAllChecks = (checkState) => {
    let updatedChecks = {};
    for (const item in cartItems) {
      if (cartItems[item] !== 0) {
        updatedChecks[item] = checkState;
      } else {
        updatedChecks[item] = checkedItems[item]; // Preserve state for items not in cart
      }
    }
    setCheckedItems((prev) => ({
      ...prev,
      ...updatedChecks,
    }));
  };

  const areAllItemsChecked = () => {
    for (const item in cartItems) {
      if (cartItems[item] !== 0 && !checkedItems[item]) {
        return false;
      }
    }
    return true;
  };

  const getCartProducts = () => {
    // Get active cart products in the order they were added (newest first)
    return cartOrder
      .filter((id) => cartItems[id] > 0)
      .map((id) => allProduct.find((product) => product.id === Number(id)));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] !== 0 && checkedItems[item]) {
        let itemInfo = allProduct.find(
          (product) => product.id === Number(item),
        );
        totalAmount += cartItems[item] * itemInfo.newPrice;
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] !== 0) {
        totalItems++;
      }
    }
    return totalItems;
  };

  const contextValue = {
    allProduct,
    getCartProducts,
    getTotalCartAmount,
    getTotalCartItems,
    cartItems,
    checkedItems,
    addToCart,
    removeOneFromCart,
    removeFromCart,
    toggleItemCheck,
    toggleAllChecks,
    areAllItemsChecked,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
