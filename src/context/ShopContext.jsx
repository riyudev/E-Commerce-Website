import React, { createContext, useState } from "react";
import allProduct from "../assets/AllProducts.js";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < allProduct.length + 1; i++) {
    cart[i] = {};
  }
  return cart;
};

const getDefaultCheckedItems = () => {
  let checkedItems = {};
  for (let i = 1; i < allProduct.length + 1; i++) {
    checkedItems[i] = true;
  }
  return checkedItems;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [checkedItems, setCheckedItems] = useState(getDefaultCheckedItems());
  const [cartOrder, setCartOrder] = useState([]);

  const addToCart = (itemId, size = "M") => {
    let alreadyInCart = getItemTotalQuantity(itemId) > 0;

    setCartItems((prev) => {
      const updatedCart = { ...prev };

      if (!updatedCart[itemId][size]) {
        updatedCart[itemId][size] = 0;
      }

      updatedCart[itemId][size] += 1;
      return updatedCart;
    });

    if (!alreadyInCart) {
      setCartOrder((prevOrder) => {
        const newOrder = [...prevOrder];
        const index = newOrder.indexOf(itemId);
        if (index > -1) newOrder.splice(index, 1);
        return [itemId, ...newOrder];
      });
    }
  };

  const getItemTotalQuantity = (itemId) => {
    let total = 0;
    const sizeObj = cartItems[itemId];

    if (sizeObj) {
      Object.values(sizeObj).forEach((qty) => {
        total += qty;
      });
    }

    return total;
  };

  const removeOneFromCart = (itemId, size) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };

      if (updatedCart[itemId][size] && updatedCart[itemId][size] > 0) {
        updatedCart[itemId][size] = updatedCart[itemId][size] - 1;
      }

      return updatedCart;
    });

    if (getItemTotalQuantity(itemId) === 1) {
      setCartOrder((prevOrder) => prevOrder.filter((id) => id !== itemId));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      updatedCart[itemId] = {};
      return updatedCart;
    });

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
      if (getItemTotalQuantity(item) !== 0) {
        updatedChecks[item] = checkState;
      } else {
        updatedChecks[item] = checkedItems[item];
      }
    }
    setCheckedItems((prev) => ({
      ...prev,
      ...updatedChecks,
    }));
  };

  const areAllItemsChecked = () => {
    for (const item in cartItems) {
      if (getItemTotalQuantity(item) !== 0 && !checkedItems[item]) {
        return false;
      }
    }
    return true;
  };

  const getCartProducts = () => {
    return cartOrder
      .filter((id) => getItemTotalQuantity(id) > 0)
      .map((id) => {
        const product = allProduct.find((product) => product.id === Number(id));
        const sizes = Object.keys(cartItems[id]).filter(
          (size) => cartItems[id][size] > 0,
        );
        return { ...product, sizes };
      });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      if (checkedItems[itemId]) {
        const sizeObj = cartItems[itemId];
        let itemInfo = allProduct.find(
          (product) => product.id === Number(itemId),
        );

        if (itemInfo) {
          Object.entries(sizeObj).forEach(([size, quantity]) => {
            totalAmount += quantity * itemInfo.newPrice;
          });
        }
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const itemId in cartItems) {
      const sizeObj = cartItems[itemId];
      totalItems += Object.keys(sizeObj).length;
    }
    return totalItems;
  };

  const getCartItemsWithSizes = () => {
    const result = [];

    cartOrder
      .filter((id) => getItemTotalQuantity(id) > 0)
      .forEach((id) => {
        const product = allProduct.find((p) => p.id === Number(id));

        if (product) {
          Object.entries(cartItems[id]).forEach(([size, quantity]) => {
            if (quantity > 0) {
              result.push({
                ...product,
                size,
                quantity,
                id: `${id}-${size}`,
                productId: id,
              });
            }
          });
        }
      });

    return result;
  };

  const contextValue = {
    allProduct,
    getCartProducts,
    getCartItemsWithSizes,
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
    getItemTotalQuantity,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
