// import { Children } from "react";
import { createContext, useContext, useState } from "react";

// The context
const CartContext = createContext();

// Custom Hook
export const useCart = () => useContext(CartContext);

// Context Provider

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add to Cart
  function addToCart(product) {
    setCartItems((prevCartItems) => {
      const itemExists = prevCartItems.find((item) => item.id === product.id);
      if (itemExists) {
        return prevCartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCartItems, { ...product, quantity: 1 }];
      }
    });
  }

  // Remove from cart
  function removeFromCart(productId) {
    setCartItems(prevCartItems => {
      const productQuantity = prevCartItems.find(item => item.id === productId).quantity
      if(productQuantity > 1){
        return prevCartItems.map(item => item.id === productId 
          ? { ...item, quantity: item.quantity - 1 } 
          : item
        )
      } else {
        return prevCartItems.filter(item => item.id !== productId)
      }
    })
  }

  // Clear cart
  function clearCart() {
    setCartItems([])
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
