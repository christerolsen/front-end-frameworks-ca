// /src/hooks/useCart.jsx

import { useLocalStorage } from "./useLocalStorage";

export const useCart = () => {
  const [cart, setCart, clearCart] = useLocalStorage("cart", []);

  const addItem = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      let updatedCart;
      if (existingItem) {
        updatedCart = prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        updatedCart = [...prevCart, { ...item, quantity: 1 }];
      }
      console.log(
        "Cart after adding item:\n" +
          updatedCart
            .map(
              (cartItem, index) =>
                `  - item ${index + 1}:\n` +
                `      - id: "${cartItem.id}"\n` +
                `      - price: "${cartItem.price}"\n` +
                `      - count: "${cartItem.quantity}"\n`
            )
            .join("")
      );
      return updatedCart;
    });
  };

  const removeItem = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  return {
    cart,
    addItem,
    removeItem,
    clearCart,
  };
};
