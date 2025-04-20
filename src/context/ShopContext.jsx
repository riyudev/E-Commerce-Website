import React, { createContext, useState, useRef } from "react";
import allProduct from "../assets/AllProducts.js";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  return cart;
};

const getDefaultCheckedItems = () => {
  let checkedItems = {};
  return checkedItems;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [checkedItems, setCheckedItems] = useState(getDefaultCheckedItems());
  const [cartOrder, setCartOrder] = useState([]);
  const actionLockRef = useRef({});

  const generateCartItemId = (productId, size) => {
    return `${productId}-${size}`;
  };

  const addToCart = (itemId, size = "M") => {
    const cartItemId = generateCartItemId(itemId, size);
    console.log("actionLockRef:", actionLockRef);

    if (actionLockRef.current[cartItemId]) return;
    actionLockRef.current[cartItemId] = true;

    setCartItems((prev) => {
      const updatedCart = { ...prev };

      const isNewItem = !updatedCart[cartItemId];

      if (isNewItem) {
        updatedCart[cartItemId] = {
          productId: itemId,
          size: size,
          quantity: 0,
        };
      }

      updatedCart[cartItemId].quantity++;

      // Only push to cartOrder if it's a new item
      if (isNewItem) {
        setCartOrder((prevOrder) => [...prevOrder, cartItemId]);
      }

      return updatedCart;
    });

    setTimeout(() => {
      actionLockRef.current[cartItemId] = false;
    }, 100);
  };

  const getItemTotalQuantity = (productId) => {
    let total = 0;

    Object.values(cartItems).forEach((item) => {
      if (item.productId === productId) {
        total += item.quantity;
      }
    });

    return total;
  };

  const removeOneFromCart = (cartItemId) => {
    if (actionLockRef.current[cartItemId]) return;
    actionLockRef.current[cartItemId] = true;

    setCartItems((prev) => {
      const updatedCart = { ...prev };

      if (updatedCart[cartItemId]) {
        updatedCart[cartItemId].quantity--;

        if (updatedCart[cartItemId].quantity <= 0) {
          delete updatedCart[cartItemId];
        }
      }

      return updatedCart;
    });

    // Release the lock
    setTimeout(() => {
      actionLockRef.current[cartItemId] = false;
    }, 100);
  };

  const removeFromCart = (cartItemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      delete updatedCart[cartItemId];
      return updatedCart;
    });

    setCartOrder((prevOrder) => prevOrder.filter((id) => id !== cartItemId));

    setCheckedItems((prev) => {
      const updated = { ...prev };
      delete updated[cartItemId];
      return updated;
    });
  };

  const toggleItemCheck = (cartItemId) => {
    setCheckedItems((prev) => ({
      ...prev,
      [cartItemId]: !prev[cartItemId],
    }));
  };

  const toggleAllChecks = (checkState) => {
    const updatedChecks = {};

    cartOrder.forEach((cartItemId) => {
      if (cartItems[cartItemId]) {
        updatedChecks[cartItemId] = checkState;
      }
    });

    setCheckedItems((prev) => ({
      ...prev,
      ...updatedChecks,
    }));
  };

  const areAllItemsChecked = () => {
    if (cartOrder.length === 0) return false;

    for (const cartItemId of cartOrder) {
      if (cartItems[cartItemId] && !checkedItems[cartItemId]) {
        return false;
      }
    }
    return true;
  };

  const getCartProducts = () => {
    return cartOrder
      .filter((cartItemId) => cartItems[cartItemId])
      .map((cartItemId) => {
        const { productId, size, quantity } = cartItems[cartItemId];
        const product = allProduct.find(
          (product) => product.id === Number(productId),
        );
        return { ...product, size, quantity, cartItemId };
      });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    cartOrder.forEach((cartItemId) => {
      if (cartItems[cartItemId] && checkedItems[cartItemId]) {
        const { productId, quantity } = cartItems[cartItemId];
        const itemInfo = allProduct.find(
          (product) => product.id === Number(productId),
        );

        if (itemInfo) {
          totalAmount += quantity * itemInfo.newPrice;
        }
      }
    });

    return totalAmount;
  };

  const getTotalCartItems = () => {
    return cartOrder.length;
  };

  const getCartItemsWithSizes = () => {
    return cartOrder
      .filter((cartItemId) => cartItems[cartItemId])
      .map((cartItemId) => {
        const { productId, size, quantity } = cartItems[cartItemId];
        const product = allProduct.find((p) => p.id === Number(productId));

        if (product) {
          return {
            ...product,
            size,
            quantity,
            cartItemId,
            productId,
          };
        }
        return null;
      })
      .filter(Boolean);
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
    generateCartItemId,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
