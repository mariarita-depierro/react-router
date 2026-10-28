import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

// 1. Creare il context
const CartContext = createContext();

// 2. Creare il Provider

export function CartContextProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  const totalCartProds = cartProducts.length;

  const totalPriceCartProds = cartProducts.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  function handleAddCartProd(prod) {
    console.log(prod);

    setCartProducts((actual) => [...actual, prod]);
  }

  return (
    <CartContext
      value={{
        cartProducts,
        totalCartProds,
        handleAddCartProd,
        totalPriceCartProds,
      }}
    >
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
