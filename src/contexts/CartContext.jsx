import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

// 1. Creare il context
const CartContext = createContext();

// 2. Creare il Provider

export function CartContextProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  const totalCartProds = cartProducts.length;

  function handleAddCartProd(prod) {
    console.log(prod);

    setCartProducts((actual) => [...actual, prod]);
  }

  return (
    <CartContext value={{ cartProducts, totalCartProds, handleAddCartProd }}>
      {children}
    </CartContext>
  );
}

// 3. Custom Hook per consumare il context
//eslint-disable-next-line
export function useCartContext() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "This component must be in the Provider to use the context!",
    );
  }

  return context;
}
